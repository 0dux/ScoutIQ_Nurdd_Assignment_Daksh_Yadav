import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Theme } from "../constants/theme";

interface FilterChipsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export const FilterChips = ({
  categories,
  activeCategory,
  onSelect,
}: FilterChipsProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <TouchableOpacity
            key={category}
            onPress={() => onSelect(category)}
            style={[styles.chip, isActive && styles.activeChip]}
          >
            <Text style={[styles.chipText, isActive && styles.activeChipText]}>
              {category}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
    flexGrow: 0, // Prevents vertical stretching in flex layouts
  },
  contentContainer: {
    paddingHorizontal: Theme.spacing.lg,
    gap: Theme.spacing.sm,
  },
  chip: {
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.sm,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Theme.colors.surface,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    minHeight: 36,
    justifyContent: "center",
  },
  activeChip: {
    backgroundColor: Theme.colors.primary,
    borderColor: Theme.colors.primary,
  },
  chipText: {
    color: Theme.colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  activeChipText: {
    color: Theme.colors.background,
  },
});
