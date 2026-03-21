"use client";

import type { Lang } from "@/lib/i18n";
import type { ResolvedBracketMatch } from "../lib/types";
import { getTeamName } from "../lib/types";
import { teams } from "../data/teams";

interface BracketMatchProps {
  match: ResolvedBracketMatch;
  onPickWinner: (matchId: string, teamCode: string) => void;
  lang: Lang;
  compact?: boolean;
}

function TeamSlot({
  teamCode,
  isWinner,
  isClickable,
  onClick,
  lang,
  position,
}: {
  teamCode: string | null;
  isWinner: boolean;
  isClickable: boolean;
  onClick: () => void;
  lang: Lang;
  position: "top" | "bottom";
}) {
  const team = teamCode ? teams[teamCode] : null;
  const roundedClass = position === "top" ? "rounded-t-lg" : "rounded-b-lg";

  if (!team) {
    return (
      <div
        className={`flex items-center gap-2 ${roundedClass} border border-dashed border-gray-300 bg-gray-50 px-3 py-2`}
      >
        <span className="text-sm text-gray-300">{"\u{1F3F3}\u{FE0F}"}</span>
        <span className="font-poppins text-xs italic text-gray-400">—</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      disabled={!isClickable}
      onClick={onClick}
      className={`flex w-full items-center gap-2 ${roundedClass} border px-3 py-2 text-left transition-all ${
        isWinner
          ? "border-ebombo-primary bg-ebombo-primary/10 font-semibold"
          : isClickable
            ? "border-gray-200 bg-white hover:border-ebombo-primary/50 hover:bg-ebombo-primary/5"
            : "border-gray-200 bg-white"
      } ${isClickable ? "cursor-pointer" : "cursor-default"}`}
    >
      <span className="shrink-0 text-sm">{team.flag}</span>
      <span
        className={`truncate font-poppins text-xs ${
          isWinner ? "text-ebombo-primary" : "text-ebombo-dark"
        }`}
      >
        {getTeamName(team, lang)}
      </span>
      {isWinner && (
        <span className="ml-auto text-xs text-ebombo-primary">{"\u2713"}</span>
      )}
    </button>
  );
}

export default function BracketMatch({
  match,
  onPickWinner,
  lang,
}: BracketMatchProps) {
  const bothPresent = match.homeTeam !== null && match.awayTeam !== null;

  return (
    <div className="w-40 sm:w-44 shrink-0">
      <TeamSlot
        teamCode={match.homeTeam}
        isWinner={match.winner === match.homeTeam && match.homeTeam !== null}
        isClickable={bothPresent}
        onClick={() => match.homeTeam && onPickWinner(match.id, match.homeTeam)}
        lang={lang}
        position="top"
      />
      <TeamSlot
        teamCode={match.awayTeam}
        isWinner={match.winner === match.awayTeam && match.awayTeam !== null}
        isClickable={bothPresent}
        onClick={() => match.awayTeam && onPickWinner(match.id, match.awayTeam)}
        lang={lang}
        position="bottom"
      />
    </div>
  );
}
