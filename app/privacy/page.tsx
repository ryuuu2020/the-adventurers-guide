import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — The Adventurers Guide',
  description: 'Privacy policy and data protection practices for The Adventurers Guide.',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="border-b border-tactical-border pb-6">
        <div className="text-xs font-mono text-tactical-accent uppercase tracking-widest mb-1">
          // LEGAL_POLICY :: PRIVACY COMPLIANCE
        </div>
        <h1 className="text-3xl font-heading font-bold text-tactical-text tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-tactical-muted text-sm font-sans mt-2">
          Effective Date: September 2, 2026
        </p>
      </div>

      <div className="space-y-6 text-xs text-tactical-muted leading-relaxed">
        <section className="tactical-card space-y-2">
          <h2 className="text-sm font-mono text-tactical-text font-bold uppercase">1. Information Collection</h2>
          <p>
            The Adventurers Guide (<span className="text-tactical-accent font-mono">theadventurersguide.wiki</span>) does not require user registration or account creation. We do not collect personal identifying information (PII) such as passwords, financial data, or physical addresses.
          </p>
        </section>

        <section className="tactical-card space-y-2">
          <h2 className="text-sm font-mono text-tactical-text font-bold uppercase">2. Analytics & Cookies</h2>
          <p>
            We use Google Analytics (GA4) and Google AdSense to understand reader traffic patterns and serve non-intrusive advertisements. These services may use standard cookies and anonymous web beacons to collect aggregate browser type, referral paths, and general geographic location.
          </p>
        </section>

        <section className="tactical-card space-y-2">
          <h2 className="text-sm font-mono text-tactical-text font-bold uppercase">3. Advertising</h2>
          <p>
            Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites. You may opt out of personalized advertising by visiting Google&apos;s Ads Settings.
          </p>
        </section>

        <section className="tactical-card space-y-2">
          <h2 className="text-sm font-mono text-tactical-text font-bold uppercase">4. Contact Information</h2>
          <p>
            For any privacy-related questions, please contact our administrator at <a href="mailto:sonic6640@gmail.com" className="text-tactical-accent font-mono hover:underline">sonic6640@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
