import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Tactical Questions',
  description: 'Common questions and answers regarding The Adventurers mechanics, 1.0 updates, classes, and formulas.',
};

const FAQ_ITEMS = [
  {
    q: 'What is the release date and price of The Adventurers?',
    a: 'The Adventurers entered Early Access on November 11, 2024 and officially launched version 1.0 on August 31, 2026 on Steam for $12.99 USD by Eternal Vigilance Entertainment.',
  },
  {
    q: 'Is there an Intelligence stat in the game?',
    a: 'No. The game uses exactly six primary stats: Strength, Vitality, Resolve, Agility, Charisma, and Luck. Magic damage scales with Resolve (+6% per point above 10, plus a 25% overall buff in 1.0), not an Intelligence stat.',
  },
  {
    q: 'How does Energy recovery work in combat?',
    a: 'Resolve provides a base pool of +10 Energy per point. Vitality increases the amount of Energy recovered at the start of each combat round for every point above 10. Heavy armor (plate/chain) adds an Energy penalty per turn.',
  },
  {
    q: 'Can fallen companions be resurrected?',
    a: 'There is no resurrection spell in the standard Cleric or Druid kit. Once a character enters the bleed-out state and fails all survival checks, permadeath is permanent. Talents like "Hard To Kill", "Still In This", or Thief\'s "Just Kidding" can delay or prevent lethal blows before death occurs.',
  },
  {
    q: 'What does Unstable Ground do on hex maps?',
    a: 'Unstable platforms (mud, sand, snow) impose a published 33% reduction to hit chance and damage dealt. Flying creatures ignore this terrain penalty entirely.',
  },
  {
    q: 'How does camp morale affect combat performance?',
    a: 'Each companion has one of 15 personality traits with specific likes and dislikes (e.g. Hermit dislikes socializing; Caregiver dislikes combat damage). High morale grants bonus Energy regeneration during battles, while low morale penalizes action efficiency.',
  },
];

export default function FAQPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-tactical-border pb-6">
        <div className="text-xs font-mono text-tactical-accent uppercase tracking-widest mb-1">
          // SYS_KNOWLEDGE :: TACTICAL DEPLOYMENT FAQ
        </div>
        <h1 className="text-3xl font-heading font-bold text-tactical-text tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-tactical-muted text-sm font-sans mt-2">
          Verified tactical clarifications, 1.0 mechanics, and combat FAQs.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="tactical-card space-y-2">
            <h2 className="text-sm font-mono text-tactical-accent font-semibold flex items-center gap-2">
              <span className="text-tactical-muted">Q{index + 1}:</span>
              {item.q}
            </h2>
            <p className="text-xs text-tactical-muted leading-relaxed pl-6 border-l border-tactical-border/60">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
