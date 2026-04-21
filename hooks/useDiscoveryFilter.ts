import { useState, useMemo } from "react";
import { ATHLETES } from "../constants/athletes";

export const useDiscoveryFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSport, setActiveSport] = useState("All");

  const filteredAthletes = useMemo(() => {
    return ATHLETES.filter((athlete) => {
      const matchesSearch = athlete.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesSport =
        activeSport === "All" || athlete.sport === activeSport;
      return matchesSearch && matchesSport;
    });
  }, [searchQuery, activeSport]);

  return {
    searchQuery,
    setSearchQuery,
    activeSport,
    setActiveSport,
    filteredAthletes,
  };
};
