import React from "react";
import Link from "next/link";
import Image from "next/image";

const SOLUTIONS_LINKS = [
  { label: "Omnichannel CX", href: "/solutions/omnichannel-cx" },
  { label: "Agentic AI", href: "/solutions/agentic-ai" },
  { label: "Back office & BPM", href: "/solutions/back-office-bpm" },
  { label: "Global capability centres", href: "/solutions/global-capability-centres" },
  { label: "CX consulting & analytics", href: "/solutions/cx-consulting-analytics" },
];

const INDUSTRIES_LINKS = [
  { label: "Telecom", href: "/industries/telecom" },
  { label: "Banking & financial services", href: "/industries/banking-financial-services" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "Microfinance", href: "/industries/microfinance" },
  { label: "Agri-tech", href: "/industries/agri-tech" },
  { label: "Ed-tech", href: "/industries/ed-tech" },
  { label: "E-commerce", href: "/industries/e-commerce" },
];

const COMPANY_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Why Bangladesh", href: "/why-bangladesh" },
  { label: "Leadership", href: "/about#leadership" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <Link href="/" aria-label="Servicechai home">
              <Image
                src="/assets/img/logo-wordmark-white.png"
                alt="Servicechai — experience reimagined"
                width={986}
                height={243}
              />
            </Link>
            <p>
              Customer experience management, BPM and global capability centres —
              delivered from Bangladesh to the world.
            </p>
          </div>

          {/* Solutions Col */}
          <div className="footer-col">
            <h2>Solutions</h2>
            <ul>
              {SOLUTIONS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Col */}
          <div className="footer-col">
            <h2>Industries</h2>
            <ul>
              {INDUSTRIES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div className="footer-col">
            <h2>Company</h2>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col">
            <h2>Contact</h2>
            <div className="footer-contact">
              <p>
                <strong>Registered office</strong>
                TA-131, Wakil Tower, Gulshan-Badda Link Road, Gulshan, Dhaka
              </p>
              <p>
                <strong>Dhaka delivery centre</strong>
                Level 3, 277 Tejgaon Industrial Area, Dhaka
              </p>
              <p>
                <strong>Chattogram delivery centre</strong>
                Levels 15 &amp; 16, SF Tower, 2 Agrabad C/A, Chattogram
              </p>
              <p>
                <a href="mailto:info@servicechai.com">info@servicechai.com</a>
                <br />
                <a href="tel:+8809606557799">+880 9606 557799</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Servicechai BD Limited. All rights reserved.</p>
          <ul>
            <li>
              <Link href="/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/servicechai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ServiceChai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
