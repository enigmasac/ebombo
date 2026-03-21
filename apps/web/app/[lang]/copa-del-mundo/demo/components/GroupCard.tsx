"use client";

import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import type { GroupDef, GroupMatch, GroupStanding } from "../lib/types";
import { teams } from "../data/teams";
import MatchRow from "./MatchRow";
import StandingsTable from "./StandingsTable";

interface GroupCardProps {
  group: GroupDef;
  matches: GroupMatch[];
  standings: GroupStanding[];
  isComplete: boolean;
  onScoreChange: (matchIndex: number, home: number | null, away: number | null) => void;
  lang: Lang;
}

export default function GroupCard({
  group,
  matches,
  standings,
  isComplete,
  onScoreChange,
  lang,
}: GroupCardProps) {
  const t = getDictionary(lang).copaDelMundoDemo;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="font-poppins text-lg font-bold text-ebombo-accent">
          {t.group} {group.id}
        </h3>
        {isComplete ? (
          <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 font-poppins text-xs font-semibold text-emerald-700">
            {"\u2713"} {t.groupComplete}
          </span>
        ) : (
          <span className="rounded-full bg-gray-100 px-3 py-1 font-poppins text-xs text-gray-500">
            {t.groupIncomplete}
          </span>
        )}
      </div>

      <div className="space-y-2">
        {matches.map((m, i) => (
          <MatchRow
            key={m.id}
            homeTeam={teams[m.homeTeam]}
            awayTeam={teams[m.awayTeam]}
            homeScore={m.homeScore}
            awayScore={m.awayScore}
            onScoreChange={(h, a) => onScoreChange(i, h, a)}
            lang={lang}
          />
        ))}
      </div>

      <StandingsTable standings={standings} lang={lang} />
    </div>
  );
}
