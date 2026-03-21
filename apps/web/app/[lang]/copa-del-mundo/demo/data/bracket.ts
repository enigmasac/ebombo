import type { BracketMatchDef, BracketRound } from "../lib/types";

export const ROUND_ORDER: BracketRound[] = ["R32", "R16", "QF", "SF", "3RD", "F"];

export const ROUND_LABELS: Record<BracketRound, { es: string; en: string }> = {
  R32: { es: "Treintaidosavos", en: "Round of 32" },
  R16: { es: "Octavos de Final", en: "Round of 16" },
  QF: { es: "Cuartos de Final", en: "Quarter-Finals" },
  SF: { es: "Semifinales", en: "Semi-Finals" },
  "3RD": { es: "Tercer Puesto", en: "Third Place" },
  F: { es: "Final", en: "Final" },
};

export const bracketMatches: BracketMatchDef[] = [
  { id: "R32-1", round: "R32", homeSource: { type: "group_winner", group: "A" }, awaySource: { type: "best_third", rank: 0 } },
  { id: "R32-2", round: "R32", homeSource: { type: "group_winner", group: "B" }, awaySource: { type: "best_third", rank: 1 } },
  { id: "R32-3", round: "R32", homeSource: { type: "group_winner", group: "C" }, awaySource: { type: "best_third", rank: 2 } },
  { id: "R32-4", round: "R32", homeSource: { type: "group_winner", group: "D" }, awaySource: { type: "best_third", rank: 3 } },
  { id: "R32-5", round: "R32", homeSource: { type: "group_winner", group: "E" }, awaySource: { type: "best_third", rank: 4 } },
  { id: "R32-6", round: "R32", homeSource: { type: "group_winner", group: "F" }, awaySource: { type: "best_third", rank: 5 } },
  { id: "R32-7", round: "R32", homeSource: { type: "group_winner", group: "G" }, awaySource: { type: "best_third", rank: 6 } },
  { id: "R32-8", round: "R32", homeSource: { type: "group_winner", group: "H" }, awaySource: { type: "best_third", rank: 7 } },

  { id: "R32-9", round: "R32", homeSource: { type: "group_winner", group: "I" }, awaySource: { type: "group_runner_up", group: "D" } },
  { id: "R32-10", round: "R32", homeSource: { type: "group_winner", group: "J" }, awaySource: { type: "group_runner_up", group: "C" } },
  { id: "R32-11", round: "R32", homeSource: { type: "group_winner", group: "K" }, awaySource: { type: "group_runner_up", group: "B" } },
  { id: "R32-12", round: "R32", homeSource: { type: "group_winner", group: "L" }, awaySource: { type: "group_runner_up", group: "A" } },

  { id: "R32-13", round: "R32", homeSource: { type: "group_runner_up", group: "E" }, awaySource: { type: "group_runner_up", group: "H" } },
  { id: "R32-14", round: "R32", homeSource: { type: "group_runner_up", group: "F" }, awaySource: { type: "group_runner_up", group: "G" } },
  { id: "R32-15", round: "R32", homeSource: { type: "group_runner_up", group: "I" }, awaySource: { type: "group_runner_up", group: "L" } },
  { id: "R32-16", round: "R32", homeSource: { type: "group_runner_up", group: "J" }, awaySource: { type: "group_runner_up", group: "K" } },

  { id: "R16-1", round: "R16", homeSource: { type: "winner", matchId: "R32-1" }, awaySource: { type: "winner", matchId: "R32-2" } },
  { id: "R16-2", round: "R16", homeSource: { type: "winner", matchId: "R32-3" }, awaySource: { type: "winner", matchId: "R32-4" } },
  { id: "R16-3", round: "R16", homeSource: { type: "winner", matchId: "R32-5" }, awaySource: { type: "winner", matchId: "R32-6" } },
  { id: "R16-4", round: "R16", homeSource: { type: "winner", matchId: "R32-7" }, awaySource: { type: "winner", matchId: "R32-8" } },
  { id: "R16-5", round: "R16", homeSource: { type: "winner", matchId: "R32-9" }, awaySource: { type: "winner", matchId: "R32-10" } },
  { id: "R16-6", round: "R16", homeSource: { type: "winner", matchId: "R32-11" }, awaySource: { type: "winner", matchId: "R32-12" } },
  { id: "R16-7", round: "R16", homeSource: { type: "winner", matchId: "R32-13" }, awaySource: { type: "winner", matchId: "R32-14" } },
  { id: "R16-8", round: "R16", homeSource: { type: "winner", matchId: "R32-15" }, awaySource: { type: "winner", matchId: "R32-16" } },

  { id: "QF-1", round: "QF", homeSource: { type: "winner", matchId: "R16-1" }, awaySource: { type: "winner", matchId: "R16-2" } },
  { id: "QF-2", round: "QF", homeSource: { type: "winner", matchId: "R16-3" }, awaySource: { type: "winner", matchId: "R16-4" } },
  { id: "QF-3", round: "QF", homeSource: { type: "winner", matchId: "R16-5" }, awaySource: { type: "winner", matchId: "R16-6" } },
  { id: "QF-4", round: "QF", homeSource: { type: "winner", matchId: "R16-7" }, awaySource: { type: "winner", matchId: "R16-8" } },

  { id: "SF-1", round: "SF", homeSource: { type: "winner", matchId: "QF-1" }, awaySource: { type: "winner", matchId: "QF-2" } },
  { id: "SF-2", round: "SF", homeSource: { type: "winner", matchId: "QF-3" }, awaySource: { type: "winner", matchId: "QF-4" } },

  { id: "3RD", round: "3RD", homeSource: { type: "loser", matchId: "SF-1" }, awaySource: { type: "loser", matchId: "SF-2" } },
  { id: "F", round: "F", homeSource: { type: "winner", matchId: "SF-1" }, awaySource: { type: "winner", matchId: "SF-2" } },
];

export function getMatchesByRound(round: BracketRound): BracketMatchDef[] {
  return bracketMatches.filter((m) => m.round === round);
}
