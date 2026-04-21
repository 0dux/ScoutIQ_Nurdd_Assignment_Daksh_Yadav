import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Theme } from "../constants/theme";
import { getScoreColor } from "../utils/score";

interface ProgressBarProps {
  progress: number; // 0 to 100
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress, animatedWidth]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const barColor = getScoreColor(progress);

  return (
    <View style={styles.track}>
      <Animated.View
        style={[
          styles.fill,
          { width: widthInterpolated, backgroundColor: barColor },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    height: 12,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: Theme.borderRadius.full,
    overflow: "hidden",
    width: "100%",
  },
  fill: {
    height: "100%",
    borderRadius: Theme.borderRadius.full,
  },
});
