import React, { useState, useEffect } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../constants/theme";

interface SearchBarProps {
  onSearch: (text: string) => void;
  resultCount: number;
}

export const SearchBar = ({ onSearch, resultCount }: SearchBarProps) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value);
    }, 300); // 300ms debounce as per Task 4

    return () => clearTimeout(handler);
  }, [value, onSearch]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} color={Theme.colors.textSecondary} />
        <TextInput
          style={styles.input}
          placeholder="Search athletes..."
          placeholderTextColor={Theme.colors.textSecondary}
          value={value}
          onChangeText={setValue}
        />
      </View>
      <Text style={styles.resultCount}>
        {resultCount} {resultCount === 1 ? "athlete" : "athletes"} found
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.md,
    paddingHorizontal: Theme.spacing.md,
    height: 48,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  input: {
    flex: 1,
    marginLeft: Theme.spacing.sm,
    color: Theme.colors.white,
    fontSize: 16,
  },
  resultCount: {
    color: Theme.colors.textSecondary,
    fontSize: 12,
    marginTop: Theme.spacing.xs,
    fontWeight: "500",
  },
});
