import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'The Adventurers Party Planner: 6-Stat Squad Builder' },
  description:
    'Build a 4-member company for The Adventurers: allocate 6 stats across 8 classes, pick personalities and check Energy, AP and damage math before you commit gold to a hire.',
  alternates: { canonical: '/planner/' },
};

export default function PlannerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
