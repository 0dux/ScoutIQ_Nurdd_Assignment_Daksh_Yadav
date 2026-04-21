export const Theme = {
  colors: {
    background: "#0A0E14",
    surface: "#141B26",
    surfaceHover: "#1E2736",
    primary: "#D4AF37", // Elite Gold
    secondary: "#00F5FF", // Data Cyan
    text: "#FFFFFF",
    textSecondary: "#8E9BAA",
    border: "#232D3F",
    danger: "#FF4C4C",
    success: "#4CAF50",
    white: "#FFFFFF",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  typography: {
    h1: {
      fontSize: 28,
      fontWeight: "800" as const,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: 20,
      fontWeight: "700" as const,
    },
    body: {
      fontSize: 16,
      fontWeight: "400" as const,
    },
    caption: {
      fontSize: 12,
      fontWeight: "500" as const,
      letterSpacing: 0.5,
    },
    mono: {
      fontSize: 14,
      fontFamily: "Platform-Mono" as any, // Fallback to monospace in StyleSheet
    },
  },
};
