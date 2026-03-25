export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    title: "Missile Dodge",
    description:
      "A vibecoded arcade survival game. You're an unarmed jet in a sky full of homing missiles. Dodge, weave, and outmaneuver enemy fire — then redirect their own missiles back at them. Chain kills for combo multipliers and survive as long as you can in this neon-lit arcade survival game.",
    tech: ["Vibecoding", "Game", "JavaScript"],
    demo: "https://missiledodge.srikardurgi.com",
    thumbnail: "/images/missile-dodge.png",
  },
  {
    title: "Networth Tracker",
    description:
      "A personal finance app that lets users track their net worth over time. Add assets and liabilities across categories, monitor balances, and visualize how your net worth evolves.",
    tech: ["Finance", "Full-Stack", "Vibecoding"],
    demo: "https://networth.primabyte.com",
    thumbnail: "/images/networth-tracker.png",
  },
];
