import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Athlete } from "../constants/athletes";
import { Theme } from "../constants/theme";

import { calculateScore, getScoreColor } from "../utils/score";

interface AthleteCardProps {
  athlete: Athlete;
  onPress?: () => void;
}

export const AthleteCard = React.memo(
  ({ athlete, onPress }: AthleteCardProps) => {
    const score = calculateScore(athlete.stats);

    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      >
        <Image source={{ uri: athlete.image }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.name}>{athlete.name}</Text>
          <Text style={styles.details}>
            {athlete.sport.toUpperCase()} • {athlete.position}
          </Text>
          <Text style={styles.age}>Age: {athlete.age}</Text>
        </View>

        <View
          style={[styles.scoreBadge, { borderColor: getScoreColor(score) }]}
        >
          <Text style={[styles.scoreText, { color: getScoreColor(score) }]}>
            {score}
          </Text>
          <Text style={styles.scoreLabel}>SCORE</Text>
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
    backgroundColor: Theme.colors.surfaceHover,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: Theme.borderRadius.md,
    backgroundColor: Theme.colors.background,
  },
  info: {
    flex: 1,
    marginLeft: Theme.spacing.md,
  },
  name: {
    color: Theme.colors.white,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 2,
  },
  details: {
    color: Theme.colors.textSecondary,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  age: {
    color: Theme.colors.textSecondary,
    fontSize: 11,
    marginTop: 4,
  },
  scoreBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  scoreText: {
    fontSize: 12,
    fontWeight: "800",
  },
  scoreLabel: {
    fontSize: 6,
    color: Theme.colors.textSecondary,
    fontWeight: "700",
    marginTop: -2,
  },
});
