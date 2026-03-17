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
];
