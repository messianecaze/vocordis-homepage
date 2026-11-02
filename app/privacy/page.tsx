import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice — VoCordis",
  description: "How VoCordis handles personal information on its platform and when you work with a coach who uses VoCordis.",
};

/* Text approved by Messiane, Nov 2026 (VoCordis Privacy Notice doc).
   Add the legal entity line once VoCordis is incorporated. */

const providers = [
  { name: "Supabase", purpose: "Secure database and storage for the platform. The database is located in Europe to ensure optimal data protection." },
  { name: "Vercel", purpose: "Website and platform hosting" },
  { name: "OpenAI (business API)", purpose: "AI-assisted analysis of story excerpts" },
  { name: "Google Workspace", purpose: "Secure file exchange with coaches and email" },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Privacy</p>
        <h1 className="heading heading--page">Privacy Notice</h1>
        <hr className="rule" />
        <p className="caption">Last updated: November 2026</p>
      </section>

      <section className="legal">
        <p>
          VoCordis helps coaches, mentors and educators accompany people in discovering their Purpose Pattern. This notice explains how we handle personal information when you use our platform, or work with a coach who uses VoCordis.
        </p>
        <p>
          When a coach uses VoCordis with you, the coach is responsible for your coaching relationship, and VoCordis processes your information on the coach&apos;s behalf to prepare your Purpose Pattern Report.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li><strong>Contact details:</strong> if you use the platform yourself, your name and email address.</li>
          <li><strong>Your stories and sessions:</strong> the Fulfillment Stories you write, the transcript of your story interview, and your coach&apos;s notes and selections.</li>
          <li><strong>Your report:</strong> the Purpose Pattern Report prepared for you.</li>
          <li><strong>Coaches and partners:</strong> name, contact details, and account information for those who use our platform or training.</li>
          <li><strong>Website use:</strong> our website uses no analytics or advertising cookies. Our hosting provider records basic technical information, such as IP address and browser type, to keep the site running securely.</li>
        </ul>
        <p>
          Your stories may touch on personal matters. We process them only with your explicit agreement, given through your coach, and treat it with particular care, in compliance with European data protection norms.
        </p>

        <h2>How we use it</h2>
        <p>
          We use your information only to prepare your Purpose Pattern Report, to support your coach in accompanying you, and to run and improve our services. We do not sell it or use it for advertising.
        </p>
        <p>
          To help identify patterns across your stories, VoCordis uses AI-assisted analysis through a private business service. Only the excerpts needed for each step are sent, they are not used to train AI models. Your coach shapes the analysis and works on the final report. Your coach remains at the center of this process.
        </p>
        <p>
          With your separate permission, we may use anonymised findings for research on the Purpose Pattern method. Nothing that identifies you is ever published.
        </p>

        <h2>Who can see it</h2>
        <p>
          Your information is visible to your coach and for operational reasons to a few authorized VoCordis team members. It is shared with no one else without your consent, unless the law requires it.
        </p>
        <p>
          We rely on a small number of trusted service providers who process data on our behalf under confidentiality and data protection agreements:
        </p>
        <table>
          <thead>
            <tr><th>Provider</th><th>Purpose</th></tr>
          </thead>
          <tbody>
            {providers.map((p) => (
              <tr key={p.name}><td>{p.name}</td><td>{p.purpose}</td></tr>
            ))}
          </tbody>
        </table>
        <p>
          Where a provider stores data outside Switzerland or the European Union, such as in the United States, we rely on recognised safeguards such as standard contractual clauses.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep your stories, transcript and report after your report is delivered, so you and your coach can return to them. We delete them five years after your report is delivered. Interview recordings are kept only as long as needed to prepare the transcript. You may ask us to delete your information sooner at any time.
        </p>

        <h2>Your rights</h2>
        <p>
          You may ask to see the information we hold about you, correct it, receive a copy, or have it deleted. You may also withdraw your agreement at any time; this does not affect work already done. To exercise these rights, write to us directly, or ask your coach to do so for you.
        </p>
        <p>
          If you are unhappy with how we handle your information, you may also contact the data protection authority in your country.
        </p>

        <h2>Changes and contact</h2>
        <p>
          We may update this notice as our services develop, and we will post the new version here with its date. For any question about your information, contact us at{" "}
          <a href="mailto:privacy@vocordis.com" className="text-link">privacy@vocordis.com</a>.
        </p>
      </section>
    </>
  );
}
