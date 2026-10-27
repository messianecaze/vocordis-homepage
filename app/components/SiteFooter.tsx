import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <span className="footer-mark">
        <img src="/logo-mark.png" alt="" />
      </span>
      <p className="footer-wordmark">VoCordis</p>
      <p className="footer-tagline">Revealing Purpose</p>
      <div className="footer-links">
        <Link href="/methodology">Methodology</Link>
        <Link href="/organizations">For Organizations</Link>
        <Link href="/about">About</Link>
        <a href="mailto:contact@vocordis.com">Contact</a>
      </div>
      <div className="footer-links">
        <a href="https://app.vocordis.com/login">Sign in</a>
        <a href="https://app.vocordis.com/signup">Create a VoCordis account</a>
      </div>
      <div className="footer-small" style={{ marginBottom: "1.5rem" }}>
        <a href="https://app.vocordis.com/login?password=1">Sign in with a password</a>
      </div>
      <p className="footer-small">© 2026 VoCordis. All rights reserved.</p>
    </footer>
  );
}
