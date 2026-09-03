import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Tactical Game Guide & Verified Reference',
  description: 'About The Adventurers Guide: An independent tactical wiki, evidence boundary, and stat simulator for the turn-based RPG The Adventurers.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-tactical-border pb-6">
        <div className="text-xs font-mono text-tactical-accent uppercase tracking-widest mb-1">
          // SYS_INFO :: MISSION & EVIDENCE BOUNDARY
        </div>
        <h1 className="text-3xl font-heading font-bold text-tactical-text tracking-tight">
          About The Adventurers Guide
        </h1>
        <p className="text-tactical-muted text-sm font-sans mt-2">
          An evidence-first tactical reference, mechanical archive, and interactive squad planner for Eternal Vigilance Entertainment&apos;s turn-based tactical RPG.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="tactical-card space-y-2">
          <div className="text-xs font-mono text-tactical-accent font-semibold uppercase">01. Evidence-Based Standards</div>
          <p className="text-xs text-tactical-muted leading-relaxed">
            Every formula, class talent verb, weapon multiplier, and terrain penalty is extracted directly from official Steam patch logs (v0.8.0 through 1.0.0.0), the developer-published Adventurer Guide, and verified 1.0 client mechanics. We do not publish speculative datamines or unverified percentage guesses.
          </p>
        </div>

        <div className="tactical-card space-y-2">
          <div className="text-xs font-mono text-tactical-accent font-semibold uppercase">02. Interactive Tooling</div>
          <p className="text-xs text-tactical-muted leading-relaxed">
            Rather than static text dumps, our Party Planner and Stat Calculator provide real-time computations of the 10-point pivot stat formulas (Vitality HP/Energy recovery, Resolve Magic scaling with the 1.0 +25% buff, Agility Pierce/Block/Parry adjustments) and camp personality clash dynamics.
          </p>
        </div>
      </div>

      <div className="tactical-card space-y-4">
        <h2 className="text-sm font-mono text-tactical-text font-bold uppercase tracking-wider">
          Independent Community Declaration
        </h2>
        <p className="text-xs text-tactical-muted leading-relaxed">
          The Adventurers Guide (<span className="text-tactical-accent font-mono">theadventurersguide.wiki</span>) is an independent player resource created for fans and tacticians of <em>The Adventurers</em>. 
          This project is not affiliated with, maintained by, or endorsed by Eternal Vigilance Entertainment or Valve Corporation.
        </p>
        <p className="text-xs text-tactical-muted leading-relaxed">
          All game assets, screenshots, trademarks, character designs, and mechanics are copyright &copy; Eternal Vigilance Entertainment.
        </p>
      </div>

      <div className="tactical-card space-y-3 bg-tactical-surface/40">
        <div className="text-xs font-mono text-tactical-accent uppercase font-bold">Contact & Feedback</div>
        <p className="text-xs text-tactical-muted">
          Found an error or have an updated 1.0 tactical mechanic to contribute? Reach out directly to our editorial team via our{' '}
          <Link href="/contact" className="text-tactical-accent hover:underline">
            Contact Portal
          </Link>{' '}
          or email <a href="mailto:sonic6640@gmail.com" className="text-tactical-accent font-mono hover:underline">sonic6640@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
