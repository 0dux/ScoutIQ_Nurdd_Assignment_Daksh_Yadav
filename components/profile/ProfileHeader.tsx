import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Athlete } from "../../constants/athletes";
import { Theme } from "../../constants/theme";

interface ProfileHeaderProps {
  athlete: Athlete;
}

export const ProfileHeader = ({ athlete }: ProfileHeaderProps) => {
  return (
    <View style={styles.profileHeader}>
      <Image source={{ uri: athlete.image }} style={styles.profileImage} />
      <Text style={styles.name}>{athlete.name}</Text>
      <Text style={styles.details}>
        {athlete.sport.toUpperCase()} • {athlete.position}
      </Text>
      <Text style={styles.age}>Age: {athlete.age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    alignItems: "center",
    paddingVertical: Theme.spacing.xl,
    paddingHorizontal: Theme.spacing.md,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: Theme.spacing.md,
    backgroundColor: Theme.colors.surface,
  },
  name: {
    color: Theme.colors.white,
    fontSize: 28,
    fontWeight: "800",
    marginBottom: Theme.spacing.xs,
    textAlign: "center",
  },
  details: {
    color: Theme.colors.primary,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: Theme.spacing.xs,
  },
  age: {
    color: Theme.colors.textSecondary,
    fontSize: 14,
  },
});
