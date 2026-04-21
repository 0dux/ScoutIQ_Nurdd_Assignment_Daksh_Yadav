import { Athlete } from "../constants/athletes";
import { Theme } from "../constants/theme";

export const calculateScore = (stats: Athlete["stats"]) => {
  const { speed, stamina, technique, iq } = stats;
  // Weighted average: Technique and IQ are weighted more (30% each)
  return Math.round(speed * 0.2 + stamina * 0.2 + technique * 0.3 + iq * 0.3);
};

export const getScoreColor = (val: number) => {
  if (val >= 90) return Theme.colors.primary;
  if (val >= 75) return Theme.colors.secondary;
  return Theme.colors.textSecondary;
};
