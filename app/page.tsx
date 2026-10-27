import Link from "next/link";
import { Rosette } from "./components/Rosette";
import { CompassIcon, FeatherIcon, MarkIcon } from "./components/Icons";

/* Homepage wording: approved draft "VoCordis Homepage — Draft Wording", 27 Oct 2026.
   The full previous text now lives on /methodology, /organizations and /about.
   Unpublished for now: app/components/CoachFAQ.tsx, app/content/academy-levels.ts. */

export default function Home() {
  return (
    <>
      {/* 1. HERO — stacked lockup */}
      <section className="hero">
        <div className="lockup">
          <img src="/logo-mark.png" alt="" />
          <h1 className="lockup-wordmark">VoCordis</h1>
          <span className="lockup-rule" aria-hidden="true" />
          <p className="lockup-tagline">Revealing Purpose</p>
        </div>
        <p className="hero-subtitle">Empowering those who help others discover their calling</p>
        <p className="hero-text">A story-based methodology, a certification pathway and an AI-supported Workbench for guides, and for the organizations that form people.</p>
        <div className="btn-row">
          <a href="https://app.vocordis.com/signup" className="btn btn-primary">Create a VoCordis account</a>
          <a href="mailto:contact@vocordis.com" className="btn btn-ghost">Talk to our team</a>
        </div>
      </section>

      {/* 2. TWO WAYS IN */}
      <section className="section section--muted">
        <div className="container--wide">
          <h2 className="heading center">For those who guide others, and for organizations dedicated to human formation</h2>
          <hr className="rule" />
          <div className="paths">
            <div className="card path">
              <h3 className="card-title">For Guides</h3>
              <p className="card-text">Coaches, mentors, counselors, and anyone who accompanies others. Train in the methodology and use the Workbench with the people you serve.</p>
              <div className="path-links">
                <a href="https://app.vocordis.com/signup" className="btn btn-primary">Create a VoCordis account</a>
              </div>
            </div>
            <div className="card path">
              <h3 className="card-title">For Organizations</h3>
              <p className="card-text">Schools, universities, and formation programs. Bring the methodology to your community and equip your own team to guide.</p>
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

      {/* 4. THE PURPOSE PATTERN — interactive rosette */}
      <section className="section">
        <div className="container--wide">
          <h2 className="heading center">Revealing the Purpose Pattern</h2>
          <hr className="rule" />
          <p className="lead center" style={{ marginBottom: "3rem" }}>A personal portrait that emerges from a person&apos;s own stories, in three dimensions woven into one statement.</p>
          <Rosette
            items={[
              { part: "desires", title: "Core Desires", text: "The fundamental drives woven into who you are. They require no justification." },
              { part: "modes", title: "Modes of Self-Gift", text: "The characteristic ways you give yourself to others." },
              { part: "environments", title: "Optimal Environments", text: "The conditions in which you naturally flourish." },
            ]}
          />
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
              <p className="card-text">Moments when the person felt most alive and fully themselves.</p>
            </li>
            <li className="journey-step">
              <span className="journey-icon"><CompassIcon /></span>
              <h3 className="card-title">Identify the pattern</h3>
              <p className="card-text">The guide, supported by the Workbench, surfaces what recurs across the stories.</p>
            </li>
            <li className="journey-step">
              <span className="journey-icon"><MarkIcon /></span>
              <h3 className="card-title">Receive the report</h3>
              <p className="card-text">A clear portrait of who the person is, a compass for life, career, and decisions.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* 6. ACADEMY — pathway in design, kept general */}
      <section className="section section--tight center">
        <div className="container">
          <h2 className="heading">The VoCordis Academy</h2>
          <hr className="rule" />
          <p className="lead">A certification pathway from first exposure to expert practice.</p>
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
          <p className="lead" style={{ marginBottom: "1.25rem" }}>Grounded in Christian anthropology and informed by positive psychology.</p>
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
