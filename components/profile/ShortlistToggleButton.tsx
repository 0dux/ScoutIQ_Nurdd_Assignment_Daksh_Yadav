import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../../constants/theme";

interface ShortlistToggleButtonProps {
  isShortlisted: boolean;
  onToggle: () => void;
}

export const ShortlistToggleButton = ({
  isShortlisted,
  onToggle,
}: ShortlistToggleButtonProps) => {
  return (
    <View style={styles.footer}>
      <Pressable
        style={[styles.actionButton, isShortlisted && styles.actionButtonRemove]}
        onPress={onToggle}
      >
        <Ionicons
          name={isShortlisted ? "star" : "star-outline"}
          size={20}
          color={isShortlisted ? Theme.colors.danger : Theme.colors.background}
          style={styles.actionIcon}
        />
        <Text
          style={[styles.actionButtonText, isShortlisted && styles.actionButtonTextRemove]}
        >
          {isShortlisted ? "Remove from Shortlist" : "Add to Shortlist"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: Theme.spacing.md,
    paddingBottom: 32, // safe area spacing roughly
    backgroundColor: Theme.colors.background,
    borderTopWidth: 1,
    borderTopColor: Theme.colors.border,
  },
  actionButton: {
    backgroundColor: Theme.colors.primary,
    flexDirection: "row",
    height: 56,
    borderRadius: Theme.borderRadius.full,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Theme.colors.primary,
  },
  actionButtonRemove: {
    backgroundColor: "transparent",
    borderColor: Theme.colors.danger,
  },
  actionIcon: {
    marginRight: Theme.spacing.sm,
  },
  actionButtonText: {
    color: Theme.colors.background,
    fontSize: 16,
    fontWeight: "700",
  },
  actionButtonTextRemove: {
    color: Theme.colors.danger,
  },
});
