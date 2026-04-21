import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { Athlete } from "../constants/athletes";
import { Theme } from "../constants/theme";
import { calculateScore, getScoreColor } from "../utils/score";
import { AthleteCard } from "./AthleteCard";

interface ShortlistCardProps {
  athlete: Athlete;
  onPress: () => void;
  onDelete: () => void;
}

export const ShortlistCard = ({ athlete, onPress, onDelete }: ShortlistCardProps) => {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.deleteAction}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <Ionicons name="trash" size={32} color={Theme.colors.white} />
        </Animated.View>
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableOpen={(direction) => {
        if (direction === "right") {
          onDelete();
        }
      }}
      overshootRight={false}
      containerStyle={styles.swipeableContainer}
    >
      <View style={styles.cardWrapper}>
        <AthleteCard athlete={athlete} onPress={onPress} />
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  swipeableContainer: {
    marginBottom: Theme.spacing.md,
    borderRadius: Theme.borderRadius.lg,
    overflow: "hidden", // Ensures the red background is clipped to the border radius
    backgroundColor: Theme.colors.danger,
  },
  cardWrapper: {
    // We override AthleteCard's margin bottom here so the red background doesn't peek through the gap
    marginBottom: -Theme.spacing.md, 
  },
  deleteAction: {
    flex: 1,
    backgroundColor: Theme.colors.danger,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: Theme.spacing.xl,
  },
});
