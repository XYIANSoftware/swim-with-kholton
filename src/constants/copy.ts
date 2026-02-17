// Kholton Swim Coaching — placeholder copy (confident, friendly, athlete-coach tone)

export const HERO_HEADLINE = "Swim Coaching With a National-Level Athlete";
export const HERO_SUBHEAD =
  "Build confidence, refine technique, and get faster — with a coach who’s been there.";

export type TrustItemId = "sec-swimmer" | "national-team" | "technique-confidence" | "all-ages";

export const TRUST_ITEMS: ReadonlyArray<{
  id: TrustItemId;
  icon: string;
  label: string;
  detail: { title: string; body: string };
}> = [
  {
    id: "sec-swimmer",
    icon: "pi pi-shield",
    label: "SEC Swimmer",
    detail: {
      title: "SEC collegiate swimmer",
      body: "Kholton competed at the collegiate level in the Southeastern Conference (SEC), one of the top swimming conferences in the US. That experience shapes how he teaches — clear structure, high standards, and a focus on what actually works in the pool.",
    },
  },
  {
    id: "national-team",
    icon: "pi pi-star",
    label: "US National Team Experience",
    detail: {
      title: "US National Team experience",
      body: "Training and competing with the US National Team means exposure to world-class coaching and race environments. That level of experience is now applied to every lesson — whether you’re new to the pool or chasing a personal best.",
    },
  },
  {
    id: "technique-confidence",
    icon: "pi pi-bolt",
    label: "Technique + Confidence Focus",
    detail: {
      title: "Technique and confidence",
      body: "Sessions focus on clean technique and building confidence in the water. You’ll get specific feedback and drills tailored to your level, so you see progress without the fluff.",
    },
  },
  {
    id: "all-ages",
    icon: "pi pi-users",
    label: "All Ages & Skill Levels",
    detail: {
      title: "All ages and skill levels",
      body: "From young beginners to adults and competitive swimmers, coaching is tailored to each person. We meet you where you are and build from there.",
    },
  },
];

export const FAQ_PREVIEW_ITEMS = [
  { question: "What ages do you coach?", answer: "All ages — from young beginners to adults. We tailor each session to the swimmer." },
  { question: "Do you teach adults?", answer: "Yes. Many of our clients are adults learning to swim or refining technique." },
  { question: "How long are lessons?", answer: "Typically 30–60 minutes depending on the package and focus. We’ll confirm when you book." },
  { question: "What should I bring?", answer: "Suit, goggles, towel. We’ll cover the rest." },
  { question: "Weather and cancellations?", answer: "We follow a simple cancellation policy. Details are on the Schedule page." },
] as const;

export const CTA_BAND_HEADLINE = "Ready to level up your swimming?";
export const CTA_BAND_BUTTON = "Book Lesson";
