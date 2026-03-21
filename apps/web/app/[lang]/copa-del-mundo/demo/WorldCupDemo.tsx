"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { getDictionary, localePath } from "@/lib/i18n";
import type { GroupMatch, GroupResult, DemoState } from "./lib/types";
import { groups, GROUP_IDS } from "./data/groups";
import { getGroupResult } from "./lib/scoring";
import { resolveBracket } from "./lib/bracket-logic";
import GroupStage from "./components/GroupStage";
import KnockoutBracket from "./components/KnockoutBracket";

function initGroupScores(): Record<string, GroupMatch[]> {
  const scores: Record<string, GroupMatch[]> = {};
  for (const group of groups) {
    scores[group.id] = group.matches.map((m, i) => ({
      id: `${group.id}-${i}`,
      homeTeam: m.home,
      awayTeam: m.away,
      homeScore: null,
      awayScore: null,
    }));
  }
  return scores;
}

export default function WorldCupDemo({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).copaDelMundoDemo;

  const [activeTab, setActiveTab] = useState<"groups" | "knockout">("groups");
  const [activeGroup, setActiveGroup] = useState("A");
  const [groupScores, setGroupScores] = useState<Record<string, GroupMatch[]>>(initGroupScores);
  const [bracketPicks, setBracketPicks] = useState<Record<string, string | null>>({});

  const groupResults = useMemo<Record<string, GroupResult>>(() => {
    const results: Record<string, GroupResult> = {};
    for (const group of groups) {
      results[group.id] = getGroupResult(group.teams, groupScores[group.id]);
    }
    return results;
  }, [groupScores]);

  const resolvedBracket = useMemo(
    () => resolveBracket(groupResults, bracketPicks),
    [groupResults, bracketPicks],
  );

  const completedGroups = useMemo(
    () => GROUP_IDS.filter((id) => groupResults[id]?.isComplete).length,
    [groupResults],
  );

  const handleScoreChange = useCallback(
    (groupId: string, matchIndex: number, home: number | null, away: number | null) => {
      setGroupScores((prev) => {
        const groupMatches = [...prev[groupId]];
        groupMatches[matchIndex] = {
          ...groupMatches[matchIndex],
          homeScore: home,
          awayScore: away,
        };
        return { ...prev, [groupId]: groupMatches };
      });
    },
    [],
  );

  const handlePickWinner = useCallback(
    (matchId: string, teamCode: string) => {
      setBracketPicks((prev) => ({
        ...prev,
        [matchId]: prev[matchId] === teamCode ? null : teamCode,
      }));
    },
    [],
  );

  return (
    <div className="min-h-screen bg-[#FBFAFF]">
      <div className="bg-gradient-to-br from-ebombo-accent via-ebombo-primary to-[#6B3FA0] px-[5%] py-10 text-center text-white md:py-14">
        <div className="mx-auto max-w-container">
          <span className="mb-2 inline-block text-3xl">{"\u26BD"}</span>
          <h1 className="font-poppins text-2xl font-bold leading-tight md:text-4xl">
            {t.title}
          </h1>
          <p className="mx-auto mt-3 max-w-xl font-roboto text-sm text-white/80 md:text-base">
            {t.subtitle}
          </p>

          <div className="mt-6 inline-flex rounded-full bg-white/15 p-1 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setActiveTab("groups")}
              className={`rounded-full px-5 py-2.5 font-poppins text-sm font-semibold transition-all ${
                activeTab === "groups"
                  ? "bg-white text-ebombo-primary shadow-lg"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {t.tabGroups}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("knockout")}
              className={`rounded-full px-5 py-2.5 font-poppins text-sm font-semibold transition-all ${
                activeTab === "knockout"
                  ? "bg-white text-ebombo-primary shadow-lg"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {t.tabKnockout}
              {completedGroups > 0 && (
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ebombo-orange text-[10px] font-bold text-white">
                  {completedGroups}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="px-[5%] py-8 md:py-12">
        <div className="mx-auto max-w-container">
          {activeTab === "groups" ? (
            <GroupStage
              activeGroup={activeGroup}
              onGroupChange={setActiveGroup}
              groupScores={groupScores}
              groupResults={groupResults}
              onScoreChange={handleScoreChange}
              lang={lang}
            />
          ) : (
            <KnockoutBracket
              resolvedMatches={resolvedBracket}
              onPickWinner={handlePickWinner}
              lang={lang}
            />
          )}
        </div>
      </div>

      <div className="bg-gradient-to-br from-ebombo-accent to-ebombo-primary px-[5%] py-12 text-center text-white md:py-16">
        <div className="mx-auto max-w-xl">
          <span className="mb-3 inline-block text-3xl">{"\u{1F3C6}"}</span>
          <h2 className="font-poppins text-xl font-bold md:text-2xl">
            {t.ctaTitle}
          </h2>
          <p className="mt-3 font-roboto text-sm text-white/80 md:text-base">
            {t.ctaSubtitle}
          </p>
          <Link
            href={localePath(lang, "/copa-del-mundo#contacto")}
            className="mt-6 inline-block rounded-full bg-ebombo-orange px-8 py-3.5 font-poppins text-sm font-semibold text-white shadow-lg shadow-ebombo-orange/30 transition-all hover:bg-[#E07A00] hover:shadow-xl"
          >
            {t.ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
