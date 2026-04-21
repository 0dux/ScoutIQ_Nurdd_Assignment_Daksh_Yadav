import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../constants/theme";

interface EmptyStateProps {
  message?: string;
}

export const EmptyState = ({ message = "No athletes match your criteria." }: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={64} color={Theme.colors.border} />
      <Text style={styles.title}>No results found</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Theme.spacing.xl,
    marginTop: Theme.spacing.xl,
  },
  title: {
    color: Theme.colors.white,
    fontSize: 20,
    fontWeight: "700",
    marginTop: Theme.spacing.md,
  },
  message: {
    color: Theme.colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginTop: Theme.spacing.sm,
  },
});
