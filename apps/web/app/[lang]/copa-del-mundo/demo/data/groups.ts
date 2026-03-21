import type { GroupDef } from "../lib/types";

function roundRobin(teams: string[]): { home: string; away: string }[] {
  return [
    { home: teams[0], away: teams[1] },
    { home: teams[2], away: teams[3] },
    { home: teams[0], away: teams[2] },
    { home: teams[1], away: teams[3] },
    { home: teams[3], away: teams[0] },
    { home: teams[1], away: teams[2] },
  ];
}

const groupTeams: Record<string, string[]> = {
  A: ["USA", "NGA", "SRB", "TBD1"],
  B: ["MEX", "ECU", "SEN", "JAM"],
  C: ["CAN", "JPN", "BEL", "TUN"],
  D: ["ARG", "DEN", "CMR", "PER"],
  E: ["BRA", "CRO", "KOR", "CRC"],
  F: ["FRA", "COL", "SAU", "TBD2"],
  G: ["ESP", "POL", "IRN", "PAN"],
  H: ["ENG", "CHL", "MAR", "HON"],
  I: ["GER", "URU", "AUS", "TBD3"],
  J: ["POR", "NED", "EGY", "TBD4"],
  K: ["ITA", "SUI", "CIV", "TBD5"],
  L: ["TUR", "AUT", "PAR", "TBD6"],
};

export const GROUP_IDS = Object.keys(groupTeams);

export const groups: GroupDef[] = GROUP_IDS.map((id) => ({
  id,
  teams: groupTeams[id],
  matches: roundRobin(groupTeams[id]),
}));

export function getGroup(id: string): GroupDef {
  return groups.find((g) => g.id === id)!;
}
