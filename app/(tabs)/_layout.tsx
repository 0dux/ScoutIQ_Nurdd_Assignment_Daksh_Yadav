import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Theme } from "../../constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.primary,
        tabBarInactiveTintColor: Theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Theme.colors.surface,
          borderTopColor: Theme.colors.border,
          borderTopWidth: 1, // Added top border
          height: 80,
          paddingBottom: 16,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: Theme.colors.background,
        },
        headerTitleStyle: {
          color: Theme.colors.white,
          fontWeight: "800",
          fontSize: 20,
        },
        headerShadowVisible: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "DISCOVER",
          tabBarLabel: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shortlist"
        options={{
          headerTitle: "SHORTLIST",
          tabBarLabel: "Shortlist",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
