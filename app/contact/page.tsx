import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Editorial Team — The Adventurers Guide',
  description: 'Contact the maintainers of The Adventurers Guide for tactical corrections, patch verification, and editorial inquiries.',
};

export default function ContactPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="border-b border-tactical-border pb-6">
        <div className="text-xs font-mono text-tactical-accent uppercase tracking-widest mb-1">
          // COMM_CHANNEL :: EDITORIAL DESK
        </div>
        <h1 className="text-3xl font-heading font-bold text-tactical-text tracking-tight">
          Contact Maintainers
        </h1>
        <p className="text-tactical-muted text-sm font-sans mt-2">
          We welcome direct corrections, 1.0 build submissions, and bug reports from the community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="tactical-card space-y-3">
          <div className="text-xs font-mono text-tactical-accent font-semibold uppercase">Direct Email</div>
          <div className="text-sm font-mono text-tactical-text">
            <a href="mailto:sonic6640@gmail.com" className="hover:text-tactical-accent transition-colors underline underline-offset-4">
              sonic6640@gmail.com
            </a>
          </div>
          <p className="text-xs text-tactical-muted leading-relaxed">
            For urgent formula corrections, broken calculator links, copyright notices, or editorial queries.
          </p>
        </div>

        <div className="tactical-card space-y-3">
          <div className="text-xs font-mono text-tactical-accent font-semibold uppercase">Response Window</div>
          <div className="text-sm font-mono text-tactical-accent-green">
            24 – 48 Hours
          </div>
          <p className="text-xs text-tactical-muted leading-relaxed">
            All submitted mechanical corrections are cross-checked against Steam client build logs before inclusion.
          </p>
        </div>
      </div>

      <div className="tactical-card space-y-4">
        <h2 className="text-sm font-mono text-tactical-text font-bold uppercase tracking-wider">
          How to Submit Data Corrections
        </h2>
        <ul className="text-xs text-tactical-muted space-y-2 list-disc list-inside">
          <li>Specify the exact game version (e.g. <span className="font-mono text-tactical-text">1.0.0.0</span> or latest Steam hotfix).</li>
          <li>Include the affected Class, Skill, or Attribute formula.</li>
          <li>Provide in-game combat log screenshots or official patch notes reference if available.</li>
        </ul>
      </div>
    </div>
  );
}
