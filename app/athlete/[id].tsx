import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { ATHLETES } from "../../constants/athletes";
import { Theme } from "../../constants/theme";
import { ProgressBar } from "../../components/ProgressBar";
import { calculateScore, getScoreColor } from "../../utils/score";
import { useShortlist } from "../../context/ShortlistContext";

import { ProfileHeader } from "../../components/profile/ProfileHeader";
import { StatGrid } from "../../components/profile/StatGrid";
import { ShortlistToggleButton } from "../../components/profile/ShortlistToggleButton";

export default function AthleteProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { isShortlisted, addToShortlist, removeFromShortlist } = useShortlist();

  const athlete = ATHLETES.find((a) => a.id === id);

  if (!athlete) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Athlete not found.</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const score = calculateScore(athlete.stats);
  const scoreColor = getScoreColor(score);
  const shortlisted = isShortlisted(athlete.id);

  const toggleShortlist = () => {
    if (shortlisted) {
      removeFromShortlist(athlete.id);
    } else {
      addToShortlist(athlete.id);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Header Navigation */}
      <View style={styles.headerNav}>
        <Pressable onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="arrow-back" size={28} color={Theme.colors.white} />
        </Pressable>
        <Text style={styles.navTitle}>PROFILE</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfileHeader athlete={athlete} />

        <View style={styles.section}>
          <View style={styles.scoreHeader}>
            <Text style={styles.sectionTitle}>READINESS SCORE</Text>
            <Text style={[styles.scoreNumber, { color: scoreColor }]}>
              {score}/100
            </Text>
          </View>
          <ProgressBar progress={score} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PERFORMANCE METRICS</Text>
          <StatGrid stats={athlete.stats} />
        </View>
      </ScrollView>

      <ShortlistToggleButton
        isShortlisted={shortlisted}
        onToggle={toggleShortlist}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  errorText: {
    color: Theme.colors.white,
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
  },
  headerNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Theme.spacing.md,
    height: 60,
  },
  backIcon: {
    padding: Theme.spacing.xs,
    marginLeft: -Theme.spacing.xs,
  },
  navTitle: {
    color: Theme.colors.white,
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 2,
  },
  scrollContent: {
    paddingBottom: 100, // space for footer
  },
  section: {
    paddingHorizontal: Theme.spacing.md,
    marginBottom: Theme.spacing.xl,
  },
  scoreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: Theme.spacing.sm,
  },
  sectionTitle: {
    color: Theme.colors.white,
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 1,
  },
  scoreNumber: {
    fontSize: 24,
    fontWeight: "800",
  },
  backButton: {
    marginTop: 20,
    alignSelf: "center",
    padding: 10,
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.md,
  },
  backButtonText: {
    color: Theme.colors.primary,
  },
});
