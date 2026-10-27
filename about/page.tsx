import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — VoCordis",
  description: "What VoCordis is, where the name comes from, and the vision of the human person behind it.",
};

/* Text moved from the previous homepage. One change, approved 27 Oct 2026:
   the unconfirmed "42% suffer from anxiety or depression" figure is removed.
   Source for the remaining figures: Making Caring Common, On Edge (2023). */

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">What is VoCordis?</p>
        <h1 className="heading heading--page">Empowering those who help others discover their heart&apos;s calling, so purpose becomes lived reality</h1>
        <hr className="rule" />
        <p className="lead">
          A Harvard study found that 58% of young adults lack purpose or meaning, and 44% feel they matter to others only a little or not at all. Behind these numbers is a simpler truth: most people have never been helped to understand who they are and what they are made to offer.
        </p>
        <p className="lead">
          VoCordis addresses this by training and equipping guides - coaches, mentors, and all who accompany others - along with organizations dedicated to human formation and purpose accompaniment, with a proven story-based methodology for uncovering each person&apos;s unique Purpose Pattern, and a Workbench that supports the analysis and report generation. Together, they allow guides to accompany those they serve from their story to a clear, personalized portrait of who they are and what they are made to give.
        </p>
      </section>

      <section className="section section--muted center">
        <div className="container">
          <p className="statement">
            VoCordis comes from the Latin <em>vox cordis</em>, the voice of the heart. Each person&apos;s deepest purpose is not invented or assigned. It is already written into who they are, waiting to be heard.
          </p>
        </div>
      </section>

      <section className="section center">
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <hr className="rule" style={{ marginTop: 0 }} />
          <p className="statement" style={{ marginBottom: "1.75rem" }}>
            This work is grounded in a vision of the human person shaped by Christian anthropology and informed by positive psychology. It assumes that each person carries a unique imprint, and that the desires, gifts, and loves revealed in their stories are not accidental, but point toward a deeper meaning.
          </p>
          <p className="lead" style={{ marginBottom: 0 }}>
            We offer this work with the conviction that human beings are not only physical, but also spiritual, and that a fully lived life involves engaging both dimensions. We invite you to continue exploring where these longings come from, and what animates this work.
          </p>
          <hr className="rule" style={{ marginBottom: 0 }} />
        </div>
      </section>
    </>
  );
}
