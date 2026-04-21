import { useMemo } from "react";
import { ATHLETES } from "../constants/athletes";
import { calculateScore } from "../utils/score";
import { useShortlist } from "../context/ShortlistContext";

export const useShortlistStats = () => {
  const { shortlist, removeFromShortlist } = useShortlist();

  const shortlistedAthletes = useMemo(() => {
    return ATHLETES.filter((athlete) => shortlist.includes(athlete.id));
  }, [shortlist]);

  const averageScore = useMemo(() => {
    if (shortlistedAthletes.length === 0) return 0;
    const totalScore = shortlistedAthletes.reduce(
      (acc, curr) => acc + calculateScore(curr.stats),
      0
    );
    return Math.round(totalScore / shortlistedAthletes.length);
  }, [shortlistedAthletes]);

  return {
    shortlistedAthletes,
    averageScore,
    removeFromShortlist,
  };
};
