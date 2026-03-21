import type { GroupMatch, GroupStanding, GroupResult } from "./types";
import { teams } from "../data/teams";

export function calculateStandings(
  teamCodes: string[],
  matches: GroupMatch[],
): GroupStanding[] {
  const map = new Map<string, GroupStanding>();

  for (const code of teamCodes) {
    map.set(code, {
      teamCode: code,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      position: 0,
    });
  }

  for (const m of matches) {
    if (m.homeScore === null || m.awayScore === null) continue;
    const home = map.get(m.homeTeam)!;
    const away = map.get(m.awayTeam)!;

    home.played++;
    away.played++;
    home.goalsFor += m.homeScore;
    home.goalsAgainst += m.awayScore;
    away.goalsFor += m.awayScore;
    away.goalsAgainst += m.homeScore;

    if (m.homeScore > m.awayScore) {
      home.won++;
      away.lost++;
    } else if (m.homeScore < m.awayScore) {
      away.won++;
      home.lost++;
    } else {
      home.drawn++;
      away.drawn++;
    }
  }

  const standings = Array.from(map.values()).map((s) => ({
    ...s,
    goalDifference: s.goalsFor - s.goalsAgainst,
    points: s.won * 3 + s.drawn,
  }));

  standings.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    const rankA = teams[a.teamCode]?.fifaRanking ?? 99;
    const rankB = teams[b.teamCode]?.fifaRanking ?? 99;
    return rankA - rankB;
  });

  return standings.map((s, i) => ({ ...s, position: i + 1 }));
}

export function isGroupComplete(matches: GroupMatch[]): boolean {
  return matches.every((m) => m.homeScore !== null && m.awayScore !== null);
}

export function getGroupResult(teamCodes: string[], matches: GroupMatch[]): GroupResult {
  return {
    standings: calculateStandings(teamCodes, matches),
    isComplete: isGroupComplete(matches),
  };
}

export function rankBestThirds(
  allGroupResults: Record<string, GroupResult>,
): { teamCode: string; fromGroup: string; standing: GroupStanding }[] {
  const thirds: { teamCode: string; fromGroup: string; standing: GroupStanding }[] = [];

  for (const [groupId, result] of Object.entries(allGroupResults)) {
    if (!result.isComplete) continue;
    const third = result.standings[2];
    if (third) {
      thirds.push({ teamCode: third.teamCode, fromGroup: groupId, standing: third });
    }
  }

  thirds.sort((a, b) => {
    const sa = a.standing;
    const sb = b.standing;
    if (sb.points !== sa.points) return sb.points - sa.points;
    if (sb.goalDifference !== sa.goalDifference) return sb.goalDifference - sa.goalDifference;
    if (sb.goalsFor !== sa.goalsFor) return sb.goalsFor - sa.goalsFor;
    const rankA = teams[sa.teamCode]?.fifaRanking ?? 99;
    const rankB = teams[sb.teamCode]?.fifaRanking ?? 99;
    return rankA - rankB;
  });

  return thirds;
}
