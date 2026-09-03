import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All 8 Classes — Stats, Weapon Affinities & Ability Verbs',
  description:
    'Complete class database for The Adventurers 1.0: primary stats, weapon masteries and every ability verb for Warrior, Archer, Wizard, Cleric, Paladin, Thief, Druid and Warlock.',
  alternates: { canonical: '/classes/' },
};

export default function ClassesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
