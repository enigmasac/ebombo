"use client";

import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import type { GroupStanding } from "../lib/types";
import { getTeamName } from "../lib/types";
import { teams } from "../data/teams";

interface StandingsTableProps {
  standings: GroupStanding[];
  lang: Lang;
  qualifiedCount?: number;
}

function positionStyle(pos: number, qualifiedCount: number): string {
  if (pos <= 2) return "bg-emerald-50 border-l-emerald-500";
  if (pos === 3 && qualifiedCount > 2) return "bg-amber-50 border-l-amber-400";
  if (pos === 3) return "bg-amber-50/60 border-l-amber-300";
  return "bg-red-50/60 border-l-red-300";
}

export default function StandingsTable({
  standings,
  lang,
  qualifiedCount = 2,
}: StandingsTableProps) {
  const t = getDictionary(lang).copaDelMundoDemo;

  const headers = [
    { key: "team", label: t.team, wide: true },
    { key: "pj", label: t.pj },
    { key: "pg", label: t.pg },
    { key: "pe", label: t.pe },
    { key: "pp", label: t.pp },
    { key: "gf", label: t.gf },
    { key: "gc", label: t.gc },
    { key: "dg", label: t.dg },
    { key: "pts", label: t.pts },
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-ebombo-accent text-white">
            <th className="w-6 px-2 py-2.5 text-center font-poppins text-xs font-semibold">#</th>
            {headers.map((h) => (
              <th
                key={h.key}
                className={`px-2 py-2.5 font-poppins text-xs font-semibold ${
                  h.wide ? "text-left" : "text-center"
                }`}
              >
                {h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {standings.map((s) => {
            const team = teams[s.teamCode];
            return (
              <tr
                key={s.teamCode}
                className={`border-l-4 border-b border-b-gray-100 transition-colors ${positionStyle(
                  s.position,
                  qualifiedCount,
                )}`}
              >
                <td className="px-2 py-2 text-center font-poppins text-xs font-bold text-gray-500">
                  {s.position}
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{team?.flag}</span>
                    <span className="font-poppins text-xs font-medium text-ebombo-dark">
                      {team ? getTeamName(team, lang) : s.teamCode}
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2 text-center font-roboto text-xs text-gray-600">{s.played}</td>
                <td className="px-2 py-2 text-center font-roboto text-xs text-gray-600">{s.won}</td>
                <td className="px-2 py-2 text-center font-roboto text-xs text-gray-600">{s.drawn}</td>
                <td className="px-2 py-2 text-center font-roboto text-xs text-gray-600">{s.lost}</td>
                <td className="px-2 py-2 text-center font-roboto text-xs text-gray-600">{s.goalsFor}</td>
                <td className="px-2 py-2 text-center font-roboto text-xs text-gray-600">{s.goalsAgainst}</td>
                <td className="px-2 py-2 text-center font-roboto text-xs font-medium text-gray-700">
                  {s.goalDifference > 0 ? `+${s.goalDifference}` : s.goalDifference}
                </td>
                <td className="px-2 py-2 text-center font-poppins text-xs font-bold text-ebombo-primary">
                  {s.points}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
