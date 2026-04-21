export interface Athlete {
  id: string;
  name: string;
  sport: "Soccer" | "Basketball" | "Football";
  position: string;
  age: number;
  image: string;
  stats: {
    speed: number;
    stamina: number;
    technique: number;
    strength: number;
    iq: number;
  };
}

export const ATHLETES: Athlete[] = [
  {
    id: "1",
    name: "Marcus 'The Engine' Vance",
    sport: "Soccer",
    position: "Midfielder",
    age: 21,
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 88, stamina: 95, technique: 90, strength: 72, iq: 94 }
  },
  {
    id: "2",
    name: "Darnell Jackson",
    sport: "Basketball",
    position: "Point Guard",
    age: 19,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 92, stamina: 85, technique: 94, strength: 68, iq: 91 }
  },
  {
    id: "3",
    name: "Jalen Pierce",
    sport: "Football",
    position: "Wide Receiver",
    age: 22,
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 96, stamina: 82, technique: 88, strength: 75, iq: 89 }
  },
  {
    id: "4",
    name: "Luca Modric II",
    sport: "Soccer",
    position: "Playmaker",
    age: 18,
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 82, stamina: 88, technique: 98, strength: 65, iq: 99 }
  },
  {
    id: "5",
    name: "Tank Richards",
    sport: "Football",
    position: "Linebacker",
    age: 23,
    image: "https://images.unsplash.com/photo-1552667466-07f70ae26c91?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 84, stamina: 90, technique: 82, strength: 96, iq: 87 }
  },
  {
    id: "6",
    name: "Kyrie Simmons",
    sport: "Basketball",
    position: "Small Forward",
    age: 20,
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 89, stamina: 86, technique: 92, strength: 82, iq: 88 }
  },
  {
    id: "7",
    name: "Zico Santos",
    sport: "Soccer",
    position: "Striker",
    age: 20,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 94, stamina: 80, technique: 95, strength: 78, iq: 85 }
  },
  {
    id: "8",
    name: "Blake 'Ghost' Walker",
    sport: "Football",
    position: "Cornerback",
    age: 19,
    image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 98, stamina: 88, technique: 85, strength: 70, iq: 92 }
  },
  {
    id: "9",
    name: "Andre Vane",
    sport: "Basketball",
    position: "Center",
    age: 21,
    image: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 75, stamina: 82, technique: 80, strength: 98, iq: 86 }
  },
  {
    id: "10",
    name: "Sofia 'Blade' Rossi",
    sport: "Soccer",
    position: "Left Back",
    age: 22,
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 91, stamina: 96, technique: 87, strength: 74, iq: 89 }
  },
  {
    id: "11",
    name: "Miles Morales",
    sport: "Basketball",
    position: "Shooting Guard",
    age: 18,
    image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 93, stamina: 84, technique: 96, strength: 70, iq: 90 }
  },
  {
    id: "12",
    name: "Dexter Morgan",
    sport: "Football",
    position: "Quarterback",
    age: 21,
    image: "https://images.unsplash.com/photo-1629901965932-8df7d919a710?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 82, stamina: 85, technique: 92, strength: 78, iq: 98 }
  },
  {
    id: "13",
    name: "Hiroshi Tanaka",
    sport: "Soccer",
    position: "Defensive Mid",
    age: 23,
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 80, stamina: 98, technique: 88, strength: 84, iq: 96 }
  },
  {
    id: "14",
    name: "Kevin 'KP' Porter",
    sport: "Basketball",
    position: "Power Forward",
    age: 20,
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 85, stamina: 88, technique: 84, strength: 92, iq: 85 }
  },
  {
    id: "15",
    name: "Rocco 'The Wall' Stone",
    sport: "Football",
    position: "Defensive Tackle",
    age: 24,
    image: "https://images.unsplash.com/photo-1551952237-954a0e68786c?auto=format&fit=crop&q=80&w=400",
    stats: { speed: 70, stamina: 80, technique: 75, strength: 99, iq: 82 }
  }
];
