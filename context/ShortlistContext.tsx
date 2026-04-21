import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ShortlistContextType {
  shortlist: string[];
  addToShortlist: (id: string) => void;
  removeFromShortlist: (id: string) => void;
  isShortlisted: (id: string) => boolean;
}

const ShortlistContext = createContext<ShortlistContextType | undefined>(undefined);

export const ShortlistProvider = ({ children }: { children: ReactNode }) => {
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Load initial shortlist from logic
  useEffect(() => {
    const loadShortlist = async () => {
      try {
        const stored = await AsyncStorage.getItem("@scoutiq_shortlist");
        if (stored) {
          setShortlist(JSON.parse(stored));
        }
      } catch (e) {
        console.error("Failed to load shortlist", e);
      } finally {
        setIsReady(true);
      }
    };
    loadShortlist();
  }, []);

  // Save to AsyncStorage whenever shortlist changes
  useEffect(() => {
    if (!isReady) return; // Don't wipe before we load
    const saveShortlist = async () => {
      try {
        await AsyncStorage.setItem("@scoutiq_shortlist", JSON.stringify(shortlist));
      } catch (e) {
        console.error("Failed to save shortlist", e);
      }
    };
    saveShortlist();
  }, [shortlist, isReady]);

  const addToShortlist = useCallback((id: string) => {
    setShortlist((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  }, []);

  const removeFromShortlist = useCallback((id: string) => {
    setShortlist((prev) => prev.filter((athleteId) => athleteId !== id));
  }, []);

  const isShortlisted = useCallback(
    (id: string) => {
      return shortlist.includes(id);
    },
    [shortlist]
  );

  return (
    <ShortlistContext.Provider
      value={{ shortlist, addToShortlist, removeFromShortlist, isShortlisted }}
    >
      {children}
    </ShortlistContext.Provider>
  );
};

export const useShortlist = () => {
  const context = useContext(ShortlistContext);
  if (context === undefined) {
    throw new Error("useShortlist must be used within a ShortlistProvider");
  }
  return context;
};
