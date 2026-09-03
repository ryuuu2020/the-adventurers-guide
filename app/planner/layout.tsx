import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Party Builder — Interactive 6-Stat Squad Planner',
  description:
    'Build a 4-member company for The Adventurers: allocate 6 stats across 8 classes, pick personalities and check Energy, AP and damage math before you commit gold to a hire.',
  alternates: { canonical: '/planner/' },
};

export default function PlannerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
