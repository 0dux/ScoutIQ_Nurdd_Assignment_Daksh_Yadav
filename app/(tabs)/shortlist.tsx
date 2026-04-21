import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Theme } from "../../constants/theme";
import { EmptyState } from "../../components/EmptyState";
import { ShortlistCard } from "../../components/ShortlistCard";
import { useShortlistStats } from "../../hooks/useShortlistStats";

export default function ShortlistScreen() {
  const router = useRouter();
  const { shortlistedAthletes, averageScore, removeFromShortlist } = useShortlistStats();

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <StatusBar style="light" />

      {/* Analytics Header */}
      <View style={styles.header}>
        <View style={styles.headerBlock}>
          <Text style={styles.headerValue}>{shortlistedAthletes.length}</Text>
          <Text style={styles.headerLabel}>SAVED</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.headerBlock}>
          <Text style={styles.headerValue}>{averageScore}</Text>
          <Text style={styles.headerLabel}>AVG SCORE</Text>
        </View>
      </View>

      <FlatList
        data={shortlistedAthletes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<EmptyState message="Your shortlist is empty. Start scouting talent!" />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ShortlistCard
            athlete={item}
            onPress={() => router.push(`/athlete/${item.id}`)}
            onDelete={() => removeFromShortlist(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  header: {
    flexDirection: "row",
    backgroundColor: Theme.colors.surface,
    marginHorizontal: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.md,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  headerBlock: {
    flex: 1,
    alignItems: "center",
  },
  headerValue: {
    color: Theme.colors.white,
    fontSize: 28,
    fontWeight: "800",
  },
  headerLabel: {
    color: Theme.colors.textSecondary,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 4,
  },
  divider: {
    width: 1,
    backgroundColor: Theme.colors.border,
    marginHorizontal: Theme.spacing.md,
  },
  listContent: {
    paddingHorizontal: Theme.spacing.md,
    paddingBottom: Theme.spacing.xl,
  },
});
