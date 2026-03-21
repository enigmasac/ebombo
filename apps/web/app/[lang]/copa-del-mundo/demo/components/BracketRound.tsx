"use client";

import type { Lang } from "@/lib/i18n";
import type { ResolvedBracketMatch, BracketRound as BracketRoundType } from "../lib/types";
import { ROUND_LABELS } from "../data/bracket";
import BracketMatch from "./BracketMatch";

interface BracketRoundProps {
  round: BracketRoundType;
  matches: ResolvedBracketMatch[];
  onPickWinner: (matchId: string, teamCode: string) => void;
  lang: Lang;
}

export default function BracketRound({
  round,
  matches,
  onPickWinner,
  lang,
}: BracketRoundProps) {
  const label = ROUND_LABELS[round][lang];

  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <h4 className="font-poppins text-xs font-bold uppercase tracking-wider text-ebombo-primary">
        {label}
      </h4>
      <div
        className="flex flex-col gap-4"
        style={{
          justifyContent: "space-around",
          minHeight: round === "R32" ? "auto" : "100%",
        }}
      >
        {matches.map((m) => (
          <BracketMatch
            key={m.id}
            match={m}
            onPickWinner={onPickWinner}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
