import type { Lang } from "@/lib/i18n";

export interface Team {
  code: string;
  name: { es: string; en: string };
  flag: string;
  fifaRanking: number;
}

export interface GroupMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
}

export interface GroupStanding {
  teamCode: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  position: number;
}

export interface GroupDef {
  id: string;
  teams: string[];
  matches: { home: string; away: string }[];
}

export type BracketSource =
  | { type: "group_winner"; group: string }
  | { type: "group_runner_up"; group: string }
  | { type: "best_third"; rank: number }
  | { type: "winner"; matchId: string }
  | { type: "loser"; matchId: string };

export type BracketRound = "R32" | "R16" | "QF" | "SF" | "3RD" | "F";

export interface BracketMatchDef {
  id: string;
  round: BracketRound;
  homeSource: BracketSource;
  awaySource: BracketSource;
  label?: { es: string; en: string };
}

export interface ResolvedBracketMatch {
  id: string;
  round: BracketRound;
  homeTeam: string | null;
  awayTeam: string | null;
  winner: string | null;
  label?: { es: string; en: string };
}

export interface GroupResult {
  standings: GroupStanding[];
  isComplete: boolean;
}

export interface DemoState {
  groupScores: Record<string, GroupMatch[]>;
  bracketWinners: Record<string, string | null>;
  activeTab: "groups" | "knockout";
  activeGroup: string;
}

export function getTeamName(team: Team, lang: Lang): string {
  return team.name[lang];
}
