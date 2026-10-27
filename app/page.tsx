import Link from "next/link";
import { PurposeTree } from "./components/PurposeTree";
import { CompassIcon, FeatherIcon, MarkIcon, MarkReversed } from "./components/Icons";

/* Homepage wording: approved draft "VoCordis Homepage — Draft Wording", 27 Oct 2026.
   The full previous text now lives on /methodology, /organizations and /about.
   Unpublished for now: app/components/CoachFAQ.tsx, app/content/academy-levels.ts. */

export default function Home() {
  return (
    <>
      {/* 1. HERO — deep blue, stained-glass watermark (concept A1, chosen 27 Oct 2026) */}
      <section className="hero-navy section--navy">
        <svg className="hero-watermark" viewBox="0 0 200 200" aria-hidden="true">
          <g fill="var(--gold)">
            <path d="M100 14C113 32 113 53 100 71C87 53 87 32 100 14Z" />
            <path d="M100 14C113 32 113 53 100 71C87 53 87 32 100 14Z" transform="rotate(120 100 100)" />
            <path d="M100 14C113 32 113 53 100 71C87 53 87 32 100 14Z" transform="rotate(240 100 100)" />
            <circle cx="148.5" cy="72" r="8.5" />
            <circle cx="51.5" cy="72" r="8.5" />
            <circle cx="100" cy="156" r="8.5" />
            <circle cx="100" cy="100" r="21" />
          </g>
          <circle cx="100" cy="100" r="96" fill="none" stroke="var(--gold)" strokeWidth="1" />
        </svg>
        <div className="hero-navy-inner">
          <MarkReversed className="hero-mark" />
          <h1 className="hero-wordmark">VoCordis</h1>
          <span className="hero-rule" aria-hidden="true" />
          <p className="hero-tagline">Revealing Purpose</p>
          <p className="hero-subtitle">Empowering those who help others discover their calling</p>
          <p className="hero-text">Every person&apos;s purpose is already written in their story. VoCordis equips guides to help them read it.</p>
          <div className="btn-row btn-row--start">
            <a href="https://app.vocordis.com/signup" className="btn btn-primary">Create a VoCordis account</a>
            <a href="mailto:contact@vocordis.com" className="btn btn-ghost">Talk to our team</a>
          </div>
        </div>
      </section>
      <div className="glass-band" aria-hidden="true">
        <span /><span /><span />
      </div>

      {/* 2. TWO WAYS IN */}
      <section className="section section--muted">
        <div className="container--wide">
          <h2 className="heading center">For those who guide others, and for organizations dedicated to human formation</h2>
          <hr className="rule" />
          <div className="paths">
            <div className="card path">
              <h3 className="card-title">For Guides</h3>
              <p className="card-who">Coaches, mentors, counselors, and anyone who accompanies others</p>
              <p className="card-text">Train in the methodology and use the Workbench with the people you serve.</p>
              <div className="path-links">
                <a href="https://app.vocordis.com/signup" className="btn btn-primary">Create a VoCordis account</a>
              </div>
            </div>
            <div className="card path">
              <h3 className="card-title">For Organizations</h3>
              <p className="card-who">Schools, universities, and formation programs</p>
              <p className="card-text">Bring the methodology to your community and equip your own team to guide.</p>
              <div className="path-links">
                <Link href="/organizations" className="btn btn-ghost">For organizations</Link>
                <a href="mailto:contact@vocordis.com" className="text-link">Talk to our team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE NEED */}
      <section className="section section--navy center">
        <div className="container--wide">
          <div className="figures">
            <div className="figure">
              <p className="figure-number">58%</p>
              <p className="figure-label">of young adults lack meaning or purpose</p>
            </div>
            <div className="figure">
              <p className="figure-number">44%</p>
              <p className="figure-label">feel they do not matter to others</p>
            </div>
          </div>
          <p className="figure-source">
            Source: Harvard Graduate School of Education, Making Caring Common,{" "}
            <a href="https://www.mcc.gse.harvard.edu/reports/on-edge/" target="_blank" rel="noopener noreferrer"><em>On Edge</em> (2023)</a>
          </p>
          <hr className="rule" />
          <p className="statement statement--on-dark">Most people have never been helped to understand who they are and what they are made to offer.</p>
        </div>
      </section>

      {/* 4. THE PURPOSE PATTERN — the tree */}
      <section className="section">
        <div className="container--wide">
          <h2 className="heading center">Revealing the Purpose Pattern</h2>
          <hr className="rule" />
          <p className="lead center" style={{ marginBottom: "3rem" }}>A personal portrait that emerges from a person&apos;s own stories, in three dimensions woven into one statement</p>
          <PurposeTree />
          <p className="center" style={{ marginTop: "2.5rem" }}>
            <Link href="/methodology" className="btn btn-ghost">Explore the methodology</Link>
          </p>
        </div>
      </section>

      {/* 5. FROM STORIES TO PURPOSE */}
      <section className="section section--muted">
        <div className="container--wide">
          <h2 className="heading center">From stories to purpose</h2>
          <hr className="rule" />
          <ol className="journey">
            <li className="journey-step">
              <span className="journey-icon"><FeatherIcon /></span>
              <h3 className="card-title">Share stories</h3>
              <p className="card-text">Moments when the person felt most alive and fully themselves</p>
            </li>
            <li className="journey-step">
              <span className="journey-icon"><CompassIcon /></span>
              <h3 className="card-title">Identify the pattern</h3>
              <p className="card-text">The guide, supported by the Workbench, surfaces what recurs across the stories.</p>
            </li>
            <li className="journey-step">
              <span className="journey-icon"><MarkIcon /></span>
              <h3 className="card-title">Receive the report</h3>
              <p className="card-text">A clear portrait of who the person is, a compass for life, career, and decisions</p>
            </li>
          </ol>
        </div>
      </section>

      {/* 6. ACADEMY — pathway in design, kept general */}
      <section className="section section--tight center">
        <div className="container">
          <h2 className="heading">The VoCordis Academy</h2>
          <hr className="rule" />
          <p className="lead">A certification pathway from first exposure to expert practice</p>
          <a href="mailto:contact@vocordis.com" className="text-link">Contact us for more information</a>
        </div>
      </section>

      {/* 7. FOUNDATION */}
      <section className="section section--muted center">
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <hr className="rule" style={{ marginTop: 0 }} />
          <p className="statement" style={{ marginBottom: "1.5rem" }}>
            VoCordis comes from the Latin <em>vox cordis</em>, the voice of the heart. Each person&apos;s deepest purpose is not invented or assigned. It is already written into who they are, waiting to be heard.
          </p>
          <p className="lead" style={{ marginBottom: "1.25rem" }}>Grounded in Christian anthropology and informed by positive psychology</p>
          <Link href="/about" className="text-link">About VoCordis</Link>
          <hr className="rule" style={{ marginBottom: 0 }} />
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="section section--navy center">
        <h2 className="heading">Ready to reveal purpose?</h2>
        <hr className="rule" />
        <p className="lead" style={{ maxWidth: "440px", marginBottom: "2.5rem" }}>Join the VoCordis community of guides and organizations helping people discover their unique calling.</p>
        <div className="btn-row">
          <a href="https://app.vocordis.com/signup" className="btn btn-primary">Create a VoCordis account</a>
          <a href="https://app.vocordis.com/login" className="btn btn-ghost">Sign in to your account</a>
        </div>
      </section>
    </>
  );
}
