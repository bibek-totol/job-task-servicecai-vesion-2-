"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";

interface NavSubItem {
  title: string;
  desc: string;
  href: string;
}

const SOLUTIONS: NavSubItem[] = [
  {
    title: "Omnichannel CX management",
    desc: "Voice, chat, email, social and messaging, run by one team.",
    href: "/solutions/omnichannel-cx",
  },
  {
    title: "Agentic AI voice & chat",
    desc: "AI agents in 75 languages, with warm hand-off to a human.",
    href: "/solutions/agentic-ai",
  },
  {
    title: "Back office & BPM",
    desc: "KYC, provisioning, moderation, finance and HR operations.",
    href: "/solutions/back-office-bpm",
  },
  {
    title: "Global capability centres",
    desc: "Your own strategic hub in Bangladesh.",
    href: "/solutions/global-capability-centres",
  },
  {
    title: "CX consulting & analytics",
    desc: "Voice of customer, contact reduction and process redesign.",
    href: "/solutions/cx-consulting-analytics",
  },
];

const INDUSTRIES: NavSubItem[] = [
  {
    title: "Telecom",
    desc: "Care, provisioning, retention and win-back.",
    href: "/industries/telecom",
  },
  {
    title: "Banking & financial services",
    desc: "Account servicing, KYC and collections support.",
    href: "/industries/banking-financial-services",
  },
  {
    title: "Insurance",
    desc: "Policy servicing, claims intake and renewals.",
    href: "/industries/insurance",
  },
  {
    title: "Microfinance",
    desc: "Borrower helplines, KYC and repayment reminders.",
    href: "/industries/microfinance",
  },
  {
    title: "Agri-tech",
    desc: "Farmer helplines, orders and advisory calling.",
    href: "/industries/agri-tech",
  },
  {
    title: "Ed-tech",
    desc: "Learner onboarding, support and enrolment.",
    href: "/industries/ed-tech",
  },
  {
    title: "E-commerce",
    desc: "Order support, returns and seller operations.",
    href: "/industries/e-commerce",
  },
];

const ABOUT_ITEMS: NavSubItem[] = [
  {
    title: "Our story",
    desc: "Who we are and how we work.",
    href: "/about",
  },
  {
    title: "Leadership",
    desc: "140+ years of combined operating experience.",
    href: "/about#leadership",
  },
  {
    title: "Governance & security",
    desc: "How we keep quality and data under control.",
    href: "/about#governance",
  },
  {
    title: "Delivery centres",
    desc: "Dhaka and Chattogram, geo-redundant.",
    href: "/about#delivery-centres",
  },
  {
    title: "Sustainability",
    desc: "Our SBTi-approved climate commitment.",
    href: "/about#sustainability",
  },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveMenu(null);
    setMobileOpen(false);
  }

  // Keyboard accessibility (Escape key closes open menus)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileOpen]);

  const handleMouseEnter = (menuName: string) => {
    if (window.innerWidth > 1024) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveMenu(menuName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      timeoutRef.current = setTimeout(() => {
        setActiveMenu(null);
      }, 180);
    }
  };

  const toggleDropdown = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header
        ref={headerRef}
        className={`site-header ${isScrolled ? "is-scrolled" : ""}`}
      >
        <div className="container header-inner">
          {/* Brand Logo */}
          <Link href="/" className="brand" aria-label="Servicechai home">
            <Image
              src="/assets/img/logo-wordmark-white.png"
              alt="Servicechai — experience reimagined"
              width={986}
              height={243}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="main-nav" id="main-nav" aria-label="Main">
            <ul>
              {/* Solutions Dropdown */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === "solutions"}
                  aria-controls="menu-solutions"
                  onClick={() => toggleDropdown("solutions")}
                  className="nav-trigger"
                >
                  Solutions
                  <Icon name="chevron" size={14} strokeWidth={2} />
                </button>

                <div
                  id="menu-solutions"
                  className={`mega ${activeMenu === "solutions" ? "is-open" : ""}`}
                >
                  <ul className="mega-list">
                    {SOLUTIONS.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>
                          <strong>{item.title}</strong>
                          <span>{item.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mega-side">
                    <strong>New to offshore CX?</strong>
                    <p>Start with one queue and ninety days.</p>
                    <Link href="/why-bangladesh#transition">
                      See how a pilot works →
                    </Link>
                  </div>

                  <div className="mega-foot">
                    <Link className="link-arrow" href="/solutions">
                      All solutions
                      <Icon name="arrow" size={16} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </li>

              {/* Industries Dropdown */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("industries")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === "industries"}
                  aria-controls="menu-industries"
                  onClick={() => toggleDropdown("industries")}
                  className="nav-trigger"
                >
                  Industries
                  <Icon name="chevron" size={14} strokeWidth={2} />
                </button>

                <div
                  id="menu-industries"
                  className={`mega mega-single ${
                    activeMenu === "industries" ? "is-open" : ""
                  }`}
                >
                  <ul className="mega-list two-col">
                    {INDUSTRIES.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>
                          <strong>{item.title}</strong>
                          <span>{item.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mega-foot">
                    <Link className="link-arrow" href="/contact">
                      Don’t see your industry? Talk to us
                      <Icon name="arrow" size={16} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </li>

              {/* Direct links */}
              <li>
                <Link
                  href="/why-bangladesh"
                  className="nav-link"
                  aria-current={pathname === "/why-bangladesh" ? "page" : undefined}
                >
                  Why Bangladesh
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions/agentic-ai"
                  className="nav-link"
                  aria-current={pathname === "/solutions/agentic-ai" ? "page" : undefined}
                >
                  Agentic AI
                </Link>
              </li>

              {/* About Dropdown */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === "about"}
                  aria-controls="menu-about"
                  onClick={() => toggleDropdown("about")}
                  className="nav-trigger"
                >
                  About
                  <Icon name="chevron" size={14} strokeWidth={2} />
                </button>

                <div
                  id="menu-about"
                  className={`mega mega-narrow ${
                    activeMenu === "about" ? "is-open" : ""
                  }`}
                >
                  <ul className="mega-list">
                    {ABOUT_ITEMS.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>
                          <strong>{item.title}</strong>
                          <span>{item.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="nav-link"
                  aria-current={pathname === "/careers" ? "page" : undefined}
                >
                  Careers
                </Link>
              </li>

              <li className="mobile-only">
                <Link
                  href="/investors"
                  className="nav-link"
                  aria-current={pathname === "/investors" ? "page" : undefined}
                >
                  Investors
                </Link>
              </li>

              <li className="mobile-only mobile-cta">
                <Link className="btn btn-mint" href="/contact/book-a-call">
                  Book a call
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <Link
              href="/investors"
              className="nav-link"
              aria-current={pathname === "/investors" ? "page" : undefined}
            >
              Investors
            </Link>

            <Link className="btn btn-mint btn-sm" href="/contact/book-a-call">
              Book a call
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={mobileOpen}
              aria-controls="main-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name="menu" className="icon-open" size={22} strokeWidth={2} />
              <Icon name="close" className="icon-close" size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
