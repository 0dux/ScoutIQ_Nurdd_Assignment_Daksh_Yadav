import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";
import { Athlete } from "../../constants/athletes";

interface StatGridProps {
  stats: Athlete["stats"];
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

export const StatGrid = ({ stats }: StatGridProps) => {
  return (
    <View style={styles.statGrid}>
      <StatBox label="Speed" value={stats.speed} />
      <StatBox label="Stamina" value={stats.stamina} />
      <StatBox label="Technique" value={stats.technique} />
      <StatBox label="Game IQ" value={stats.iq} />
    </View>
  );
};

const styles = StyleSheet.create({
  statGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Theme.spacing.md,
    marginTop: Theme.spacing.sm,
  },
  statBox: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: Theme.colors.surface,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    alignItems: "center",
  },
  statValue: {
    color: Theme.colors.white,
    fontSize: 24,
    fontWeight: "800",
    marginBottom: Theme.spacing.xs,
  },
  statLabel: {
    color: Theme.colors.textSecondary,
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});
