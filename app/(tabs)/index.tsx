import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AthleteCard } from "../../components/AthleteCard";
import { EmptyState } from "../../components/EmptyState";
import { FilterChips } from "../../components/FilterChips";
import { SearchBar } from "../../components/SearchBar";
import { Athlete } from "../../constants/athletes";
import { Theme } from "../../constants/theme";
import { useDiscoveryFilter } from "../../hooks/useDiscoveryFilter";

const SPORTS = ["All", "Soccer", "Basketball", "Football"];

export default function DiscoveryScreen() {
  const router = useRouter();
  const { setSearchQuery, activeSport, setActiveSport, filteredAthletes } =
    useDiscoveryFilter();

  const renderItem = useCallback(
    ({ item }: { item: Athlete }) => (
      <AthleteCard
        athlete={item}
        onPress={() => {
          router.push(`/athlete/${item.id}`);
        }}
      />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <StatusBar style="light" />

      <SearchBar
        onSearch={setSearchQuery}
        resultCount={filteredAthletes.length}
      />

      <FilterChips
        categories={SPORTS}
        activeCategory={activeSport}
        onSelect={setActiveSport}
      />

      <FlatList
        data={filteredAthletes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list} // Ensures list takes up remaining space
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<EmptyState />}
        showsVerticalScrollIndicator={true}
        removeClippedSubviews={true} // Performance optimization
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={4}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingTop: 0,
    paddingHorizontal: Theme.spacing.md,
    paddingBottom: Theme.spacing.xl,
  },
});
