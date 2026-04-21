import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ShortlistProvider } from "../context/ShortlistContext";

const ScoutIQTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#0A0E14",
    card: "#0A0E14",
    border: "#232D3F",
  },
};

export default function RootLayout() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#0A0E14");
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={ScoutIQTheme}>
        <ShortlistProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "#0A0E14" },
              animation: "none",
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </ShortlistProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
