import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Methodology — VoCordis",
  description: "The Purpose Pattern: Core Desires, Modes of Self-Gift and Optimal Environments, revealed from a person's own stories.",
};

/* Text moved unchanged from the previous homepage. */

function PetalGlyph() {
  return (
    <svg className="pattern-glyph" width="26" height="44" viewBox="0 0 26 44" aria-hidden="true">
      <path d="M13 1C23 12 23 32 13 43C3 32 3 12 13 1Z" fill="var(--navy)" />
    </svg>
  );
}
function CentreGlyph() {
  return (
    <svg className="pattern-glyph" width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="16" fill="var(--gold)" />
      <circle cx="22" cy="22" r="7.5" fill="var(--gold-light)" />
    </svg>
  );
}
function CircleGlyph() {
  return (
    <svg className="pattern-glyph" width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="12" fill="var(--burgundy)" />
    </svg>
  );
}
function UpArrow() {
  return (
    <div className="pattern-arrow" aria-hidden="true">
      <svg width="10" height="7" viewBox="0 0 10 7" fill="none"><path d="M5 0L10 7H0L5 0z" fill="var(--gold)" /></svg>
      <span />
    </div>
  );
}

export default function MethodologyPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">The Methodology</p>
        <h1 className="heading heading--page">Revealing the Purpose Pattern</h1>
        <hr className="rule" />
        <p className="lead">
          The Purpose Pattern is a personalized portrait of who a person is at their deepest level, emerging directly from their own stories. It is composed of three dimensions, woven together into an integrated statement.
        </p>
      </section>

      <section className="section section--muted">
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div className="pattern">
            <div className="card pattern-top">
              <PetalGlyph />
              <h2 className="card-title">Core Desires</h2>
              <p className="card-text">The fundamental drives woven into who you are. They show up repeatedly across different roles and contexts, and they require no justification. They simply are.</p>
            </div>
            <div className="pattern-pair">
              <div className="card">
                <CentreGlyph />
                <h2 className="card-title">Modes of Self-Gift</h2>
                <p className="card-text">The characteristic ways you give yourself to others. This is where your pattern becomes most visible, where your desires flow outward as gift through relationship.</p>
              </div>
              <div className="card">
                <CircleGlyph />
                <h2 className="card-title">Optimal Environments</h2>
                <p className="card-text">The conditions where you naturally flourish and your gifts find their fullest expression. When these are present, your capacity to contribute and grow expands.</p>
              </div>
            </div>
            <div className="pattern-arrows">
              <UpArrow />
              <UpArrow />
            </div>
            <div className="pattern-statement">
              <p className="eyebrow">Integrated as</p>
              <p className="statement">The Purpose Pattern Statement, unique to each person</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow center">How it works</p>
          <h2 className="heading center">From stories to purpose</h2>
          <hr className="rule" />
          <div className="steps">
            {[
              { num: "1", title: "Share your fulfillment stories", desc: "Clients recall specific moments from their lives when they felt most alive, engaged, and fully themselves. These stories are the raw material of the entire process." },
              { num: "2", title: "Identify the purpose pattern", desc: "The coach, supported by the VoCordis Workbench, surfaces recurring patterns across the stories: core desires, modes of self-gift, and optimal environments." },
              { num: "3", title: "Receive your Purpose Pattern Report", desc: "The coach synthesizes the insights into a clear, personalized portrait of who the client is, a compass for life, career, and decision-making." },
            ].map((step) => (
              <div key={step.num} className="step">
                <span className="step-num" aria-hidden="true">{step.num}</span>
                <div>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-text">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy center">
        <h2 className="heading">Ready to reveal purpose?</h2>
        <hr className="rule" />
        <div className="btn-row">
          <a href="https://app.vocordis.com/signup" className="btn btn-primary">Create a VoCordis account</a>
          <a href="mailto:contact@vocordis.com" className="btn btn-ghost">Talk to our team</a>
        </div>
      </section>
    </>
  );
}
