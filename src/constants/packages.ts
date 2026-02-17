export type PackageLevelSeverity = "success" | "info" | "warning" | "danger" | "secondary" | "contrast";

export interface PackageOption {
  id: string;
  name: string;
  forWho: string;
  duration: string;
  price: string;
  benefits: readonly string[];
  /** Label for PrimeReact Tag (e.g. Beginner, Intermediate). Omit for no tag. */
  level?: string;
  /** Severity for PrimeReact Tag. */
  levelSeverity?: PackageLevelSeverity;
}

export const PACKAGES: readonly PackageOption[] = [
  {
    id: "confidence",
    name: "Swim Confidence",
    forWho: "New to the water or building basics",
    duration: "30–45 min",
    price: "$25–$75",
    benefits: ["Water safety", "Basic strokes", "Breathing fundamentals"],
    level: "Beginner",
    levelSeverity: "success",
  },
  {
    id: "technique",
    name: "Technique Refinement",
    forWho: "You can swim; you want to get better",
    duration: "45–60 min",
    price: "$25–$75",
    benefits: ["Stroke analysis", "Efficiency drills", "Endurance building"],
    level: "Intermediate",
    levelSeverity: "info",
  },
  {
    id: "performance",
    name: "Performance Coaching",
    forWho: "Serious about speed and form",
    duration: "60 min",
    price: "$25–$75",
    benefits: ["Race pacing", "Advanced technique", "Personalized plan"],
    level: "Advanced",
    levelSeverity: "warning",
  },
  {
    id: "competitive",
    name: "Competitive Prep",
    forWho: "Preparing for meets or triathlon",
    duration: "60 min",
    price: "$25–$75",
    benefits: ["Meet strategy", "Starts & turns", "Peak timing"],
    level: "Competitive",
    levelSeverity: "danger",
  },
  {
    id: "group",
    name: "Small Group Sessions",
    forWho: "Siblings or friends (2–4 people)",
    duration: "60 min",
    price: "$25–$75",
    benefits: ["Shared cost", "Same quality", "Scheduling flexibility"],
    level: "Group",
    levelSeverity: "secondary",
  },
];
