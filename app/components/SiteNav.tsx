"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/methodology", label: "Methodology" },
  { href: "/organizations", label: "For Organizations" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Main">
      <Link href="/" className="nav-brand" aria-label="VoCordis — Revealing Purpose, home">
        <img src="/logo-mark.png" alt="" />
        <span>
          <span className="nav-wordmark">VoCordis</span>
          <span className="nav-tagline">Revealing Purpose</span>
        </span>
      </Link>

      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <div id="nav-menu" className="nav-menu" data-open={open}>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="nav-link"
                aria-current={pathname === l.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a href="https://app.vocordis.com/login" className="nav-link">Sign in</a>
          <a href="https://app.vocordis.com/signup" className="btn btn--sm btn-primary">Create a VoCordis account</a>
        </div>
      </div>
    </nav>
  );
}
