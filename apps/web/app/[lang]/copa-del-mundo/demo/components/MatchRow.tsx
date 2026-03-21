"use client";

import type { Lang } from "@/lib/i18n";
import type { Team } from "../lib/types";
import { getTeamName } from "../lib/types";

interface MatchRowProps {
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number | null;
  awayScore: number | null;
  onScoreChange: (home: number | null, away: number | null) => void;
  lang: Lang;
}

function ScoreInput({
  value,
  onChange,
}: {
  value: number | null;
  onChange: (v: number | null) => void;
}) {
  return (
    <input
      type="number"
      min={0}
      max={20}
      value={value ?? ""}
      onChange={(e) => {
        const raw = e.target.value;
        if (raw === "") {
          onChange(null);
          return;
        }
        const n = parseInt(raw, 10);
        if (!isNaN(n) && n >= 0 && n <= 20) onChange(n);
      }}
      className="w-12 h-10 rounded-lg border border-gray-300 bg-white text-center font-poppins text-lg font-bold text-ebombo-accent outline-none transition-colors focus:border-ebombo-primary focus:ring-2 focus:ring-ebombo-primary/30 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
    />
  );
}

export default function MatchRow({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  onScoreChange,
  lang,
}: MatchRowProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2.5 sm:gap-3 sm:px-4">
      <div className="flex flex-1 items-center justify-end gap-1.5 sm:gap-2 min-w-0">
        <span className="truncate text-right font-poppins text-xs font-medium text-ebombo-dark sm:text-sm">
          {getTeamName(homeTeam, lang)}
        </span>
        <span className="shrink-0 text-base sm:text-lg">{homeTeam.flag}</span>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        <ScoreInput
          value={homeScore}
          onChange={(v) => onScoreChange(v, awayScore)}
        />
        <span className="font-poppins text-xs font-bold text-gray-400">-</span>
        <ScoreInput
          value={awayScore}
          onChange={(v) => onScoreChange(homeScore, v)}
        />
      </div>

      <div className="flex flex-1 items-center gap-1.5 sm:gap-2 min-w-0">
        <span className="shrink-0 text-base sm:text-lg">{awayTeam.flag}</span>
        <span className="truncate font-poppins text-xs font-medium text-ebombo-dark sm:text-sm">
          {getTeamName(awayTeam, lang)}
        </span>
      </div>
    </div>
  );
}
