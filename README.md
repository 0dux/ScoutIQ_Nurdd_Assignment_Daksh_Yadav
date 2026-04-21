# ScoutIQ — Athlete Discovery Platform

ScoutIQ is a mobile application designed for professional sports scouts to discover talent, review deep performance metrics, and maintain a trial shortlist. This project was built within a 24-hour window as part of a technical assessment, focusing on code quality, product thinking, and a "Tactical Minimalism" UI.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn
- Expo Go app on your physical device (iOS or Android)

### Installation
1. Clone the repository and navigate to the project root.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```
4. Scan the QR code in your terminal with the **Expo Go** app to view the project natively.

---

## ✅ Task Completion & Feature Overview

| Task | Status | Implementation Details |
| :--- | :--- | :--- |
| **1. Discovery Feed** | Completed | Used `FlatList` with `keyExtractor` and performance optimizations. Calculated a 0-100 score from mock stats. |
| **2. Profile Screen** | Completed | Custom-built Animated `ProgressBar` (no external libs). Real-time shortlist toggling. |
| **3. Shortlist Screen** | Completed | Global persistence via `AsyncStorage`. Implemented swipe-to-delete gestures for a premium feel. |
| **4. Search** | Completed | Debounced input (300ms) with real-time filtering and dynamic result counts. |
| **5. Navigation** | Completed | Clean Stack-inside-Tabs structure using `expo-router`. Consistent dark-theme header styling. |

---

## 🧠 Key Decisions

### 1. Zero UI Kits (StyleSheet API)
As per the strictly defined ground rules, this project uses **no UI kits** (No NativeBase, Gluestack, etc.). Every component, including the progress bars, filter chips, and athlete cards, was handcrafted using the React Native `StyleSheet` API and CSS Flexbox. This ensures a lightweight bundle and absolute control over the design aesthetic.

### 2. Local-First Data Strategy
To meet the "No backend, no cloud" requirement, I implemented a robust mock data system in `/constants/athletes.ts` featuring 15+ athletes. Global state is managed via the **React Context API**, ensuring state updates (like adding to shortlist) reflect instantly across the tab bar and profile screens.

### 3. Native Polish over Bloat
I prioritized "High Design Quality" over adding unnecessary features. This included:
- **Flash-Free Transitions**: Configured `SystemUI` and `app.json` background colors to eliminate white flashes during navigation.
- **Haptic-Inspired Gestures**: Used `react-native-gesture-handler` for the delete action to make the app feel "native-first."

### 4. Modular Refactor
To demonstrate enterprise code quality, I refactored the main screens into small, reusable sub-components and extracted business logic into **Custom Hooks** (`useDiscoveryFilter`, `useShortlistStats`).

---

## 🤖 AI Usage Disclosure
This project was built using **Antigravity**, an agentic AI coding assistant from Google DeepMind. Antigravity was used for:
- Initial project scaffolding and routing setup.
- Generating the performance stat weighting logic.
- Assisting with the `react-native-gesture-handler` implementation for the swipeable cards.

---

## 🚧 Retrospective

### What's Incomplete & Why?
- **Advanced Sort Logic**: While the app has sport-based filtering, I didn't implement sorting by score (e.g., "Sort by Speed"). Given the limit, I chose to focus on the **Shortlist Persistence** and **Search Debouncing** as they were higher-weighted rubrics.
- **Empty State Custom Animations**: I used a clean, high-contrast text fallback for empty states. With more time, I would have used Lottie or custom SVG animations to make the "No Athletes Found" screen more engaging.

### One thing I'd do differently with more time?
I would implement **Shared Element Transitions** (using `react-native-reanimated`). Having the athlete's profile image smoothly "pop" and transition from the feed card directly into the Profile header during navigation would have provided that final "Elite" level of polish.

---

**Submitted by**: Daksh Yadav
**Project**: ScoutIQ — Athlete Discovery
