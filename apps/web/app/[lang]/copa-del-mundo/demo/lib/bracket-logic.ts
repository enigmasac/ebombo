import type { BracketSource, GroupResult, ResolvedBracketMatch } from "./types";
import { bracketMatches } from "../data/bracket";
import { rankBestThirds } from "./scoring";

export function resolveSource(
  source: BracketSource,
  groupResults: Record<string, GroupResult>,
  bestThirds: { teamCode: string }[],
  resolvedWinners: Record<string, string | null>,
  resolvedLosers: Record<string, { home: string | null; away: string | null; winner: string | null }>,
): string | null {
  switch (source.type) {
    case "group_winner": {
      const result = groupResults[source.group];
      if (!result?.isComplete) return null;
      return result.standings[0]?.teamCode ?? null;
    }
    case "group_runner_up": {
      const result = groupResults[source.group];
      if (!result?.isComplete) return null;
      return result.standings[1]?.teamCode ?? null;
    }
    case "best_third": {
      return bestThirds[source.rank]?.teamCode ?? null;
    }
    case "winner": {
      return resolvedWinners[source.matchId] ?? null;
    }
    case "loser": {
      const match = resolvedLosers[source.matchId];
      if (!match || !match.winner) return null;
      if (match.winner === match.home) return match.away;
      if (match.winner === match.away) return match.home;
      return null;
    }
  }
}

export function resolveBracket(
  groupResults: Record<string, GroupResult>,
  userPicks: Record<string, string | null>,
): ResolvedBracketMatch[] {
  const bestThirds = rankBestThirds(groupResults).slice(0, 8);

  const resolvedWinners: Record<string, string | null> = {};
  const matchData: Record<string, { home: string | null; away: string | null; winner: string | null }> = {};

  const resolved: ResolvedBracketMatch[] = [];

  for (const def of bracketMatches) {
    const homeTeam = resolveSource(def.homeSource, groupResults, bestThirds, resolvedWinners, matchData);
    const awayTeam = resolveSource(def.awaySource, groupResults, bestThirds, resolvedWinners, matchData);

    let winner = userPicks[def.id] ?? null;

    if (winner && winner !== homeTeam && winner !== awayTeam) {
      winner = null;
    }

    resolvedWinners[def.id] = winner;
    matchData[def.id] = { home: homeTeam, away: awayTeam, winner };

    resolved.push({
      id: def.id,
      round: def.round,
      homeTeam,
      awayTeam,
      winner,
      label: def.label,
    });
  }

  return resolved;
}

export function getInvalidatedPicks(
  oldResolved: ResolvedBracketMatch[],
  newResolved: ResolvedBracketMatch[],
  currentPicks: Record<string, string | null>,
): string[] {
  const invalidated: string[] = [];
  for (const newMatch of newResolved) {
    const pick = currentPicks[newMatch.id];
    if (!pick) continue;
    if (pick !== newMatch.homeTeam && pick !== newMatch.awayTeam) {
      invalidated.push(newMatch.id);
    }
  }
  return invalidated;
}

export function getQualifiedTeams(
  groupResults: Record<string, GroupResult>,
): Set<string> {
  const qualified = new Set<string>();

  for (const result of Object.values(groupResults)) {
    if (!result.isComplete) continue;
    if (result.standings[0]) qualified.add(result.standings[0].teamCode);
    if (result.standings[1]) qualified.add(result.standings[1].teamCode);
  }

  const bestThirds = rankBestThirds(groupResults).slice(0, 8);
  for (const t of bestThirds) {
    qualified.add(t.teamCode);
  }

  return qualified;
}
