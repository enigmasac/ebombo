"use client";

import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import type { ResolvedBracketMatch } from "../lib/types";
import { ROUND_ORDER, ROUND_LABELS } from "../data/bracket";
import BracketRound from "./BracketRound";
import BracketMatch from "./BracketMatch";
import { teams } from "../data/teams";
import { getTeamName } from "../lib/types";

interface KnockoutBracketProps {
  resolvedMatches: ResolvedBracketMatch[];
  onPickWinner: (matchId: string, teamCode: string) => void;
  lang: Lang;
}

export default function KnockoutBracket({
  resolvedMatches,
  onPickWinner,
  lang,
}: KnockoutBracketProps) {
  const t = getDictionary(lang).copaDelMundoDemo;

  const byRound = (round: string) =>
    resolvedMatches.filter((m) => m.round === round);

  const finalMatch = resolvedMatches.find((m) => m.id === "F");
  const champion = finalMatch?.winner ? teams[finalMatch.winner] : null;

  const mainRounds = ["R32", "R16", "QF", "SF", "F"] as const;
  const thirdMatch = byRound("3RD");

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto pb-4 -mx-[5%] px-[5%]">
        <div className="flex gap-6 min-w-max items-stretch">
          {mainRounds.map((round) => (
            <BracketRound
              key={round}
              round={round}
              matches={byRound(round)}
              onPickWinner={onPickWinner}
              lang={lang}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
        {thirdMatch.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <h4 className="font-poppins text-xs font-bold uppercase tracking-wider text-gray-500">
              {t.thirdPlace}
            </h4>
            <BracketMatch
              match={thirdMatch[0]}
              onPickWinner={onPickWinner}
              lang={lang}
            />
          </div>
        )}

        {champion && (
          <div className="flex flex-col items-center gap-2 rounded-2xl border-2 border-ebombo-orange bg-gradient-to-b from-amber-50 to-orange-50 px-8 py-5">
            <span className="text-3xl">{"\u{1F3C6}"}</span>
            <span className="font-poppins text-xs font-bold uppercase tracking-wider text-ebombo-orange">
              {t.champion}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{champion.flag}</span>
              <span className="font-poppins text-lg font-bold text-ebombo-accent">
                {getTeamName(champion, lang)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
