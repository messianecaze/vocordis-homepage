import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Organizations — VoCordis",
  description: "Bring the Purpose Pattern methodology to your school, university or formation program.",
};

/* Text moved unchanged from the previous homepage. */

export default function OrganizationsPage() {
  return (
    <>
      <section className="page-header">
        <h1 className="heading heading--page">For Organizations</h1>
        <hr className="rule" />
        <p className="lead">
          Schools, universities, and organizations dedicated to human formation and purpose accompaniment. Bring the Purpose Pattern methodology to your community, and equip your own team to guide those you serve
        </p>
        <p style={{ marginTop: "2rem" }}>
          <a href="mailto:contact@vocordis.com" className="btn btn-primary">Talk to our team</a>
        </p>
      </section>

      <section className="section section--navy">
        <div className="container center">
          <p className="eyebrow">Who it is for</p>
          <h2 className="heading">Built for those who walk alongside others - one on one, and at scale</h2>
          <hr className="rule" />

          <p className="group-label">Individual guides</p>
          <div className="roles" style={{ marginBottom: "2.5rem" }}>
            {["Life coaches", "Professional coaches", "Counselors", "Mentors"].map((role) => (
              <div key={role} className="role">{role}</div>
            ))}
          </div>

          <p className="group-label">Organizations</p>
          <div className="roles">
            {["Schools & Universities", "Formation Programs"].map((role) => (
              <div key={role} className="role">{role}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
