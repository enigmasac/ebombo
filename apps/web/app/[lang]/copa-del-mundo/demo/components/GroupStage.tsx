"use client";

import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import type { GroupMatch, GroupResult } from "../lib/types";
import { groups, GROUP_IDS } from "../data/groups";
import GroupCard from "./GroupCard";

interface GroupStageProps {
  activeGroup: string;
  onGroupChange: (group: string) => void;
  groupScores: Record<string, GroupMatch[]>;
  groupResults: Record<string, GroupResult>;
  onScoreChange: (groupId: string, matchIndex: number, home: number | null, away: number | null) => void;
  lang: Lang;
}

export default function GroupStage({
  activeGroup,
  onGroupChange,
  groupScores,
  groupResults,
  onScoreChange,
  lang,
}: GroupStageProps) {
  const t = getDictionary(lang).copaDelMundoDemo;
  const activeGroupDef = groups.find((g) => g.id === activeGroup)!;
  const result = groupResults[activeGroup];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {GROUP_IDS.map((id) => {
          const isActive = id === activeGroup;
          const isComplete = groupResults[id]?.isComplete ?? false;

          return (
            <button
              key={id}
              type="button"
              onClick={() => onGroupChange(id)}
              className={`relative flex items-center gap-1 rounded-full px-4 py-2 font-poppins text-sm font-semibold transition-all ${
                isActive
                  ? "bg-ebombo-primary text-white shadow-md shadow-ebombo-primary/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.group} {id}
              {isComplete && (
                <span
                  className={`text-xs ${isActive ? "text-white/80" : "text-emerald-500"}`}
                >
                  {"\u2713"}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <GroupCard
        group={activeGroupDef}
        matches={groupScores[activeGroup]}
        standings={result?.standings ?? []}
        isComplete={result?.isComplete ?? false}
        onScoreChange={(matchIndex, home, away) =>
          onScoreChange(activeGroup, matchIndex, home, away)
        }
        lang={lang}
      />
    </div>
  );
}
