export interface PackageOption {
  id: string;
  name: string;
  forWho: string;
  duration: string;
  price: string;
  benefits: readonly string[];
}

export const PACKAGES: readonly PackageOption[] = [
  {
    id: "confidence",
    name: "Swim Confidence (Beginner)",
    forWho: "New to the water or building basics",
    duration: "30–45 min",
    price: "—",
    benefits: ["Water safety", "Basic strokes", "Breathing fundamentals"],
  },
  {
    id: "technique",
    name: "Technique Refinement (Intermediate)",
    forWho: "You can swim; you want to get better",
    duration: "45–60 min",
    price: "—",
    benefits: ["Stroke analysis", "Efficiency drills", "Endurance building"],
  },
  {
    id: "performance",
    name: "Performance Coaching (Advanced)",
    forWho: "Serious about speed and form",
    duration: "60 min",
    price: "—",
    benefits: ["Race pacing", "Advanced technique", "Personalized plan"],
  },
  {
    id: "competitive",
    name: "Competitive Prep",
    forWho: "Preparing for meets or triathlon",
    duration: "60 min",
    price: "—",
    benefits: ["Meet strategy", "Starts & turns", "Peak timing"],
  },
  {
    id: "group",
    name: "Small Group Sessions",
    forWho: "Siblings or friends (2–4 people)",
    duration: "60 min",
    price: "—",
    benefits: ["Shared cost", "Same quality", "Scheduling flexibility"],
  },
];
