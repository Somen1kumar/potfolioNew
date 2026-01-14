"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import React, { useEffect, useId, useRef, useState } from "react";
import {
  UserCircleIcon,
  UserIcon,
  HamburgerIcon,
  BriefcaseIcon,
  ChevronsIcon,
  ExternalIcon,
  CapIcon,
  TrophyIcon,
  ChatIcon,
} from "../icons/svgIcons";
import styles from "./styles.module.css";

interface PropsInterface {
  activeSection: string;
}
/**
 * GlobalHeader
 * - Mobile: compact header with hamburger that opens an accessible overlay menu.
 * - Desktop: full-width pill-shaped header with brand and icon actions.
 * - No external CSS libs; styled-jsx keeps styles co-located.
 */

const LabelsHeader = {
    logoLabel: "somen.dev",
    menuLabel: "Menu",
    closeLabel: "Close",
    skipContentLabel: "Skip to content",

}
const GlobalHeader: React.FC<PropsInterface> = (props: PropsInterface) => {
  const activeSection = props.activeSection;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activeSession, setActvieSession] = useState("profile");
  const menuId = useId();
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  const triggerBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close on Escape key when overlay is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    if (open) body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [open]);
  useEffect(() => {
    setActvieSession(activeSection);
  }, [activeSection])

  // Auto-focus first item when opening
  useEffect(() => {
    if (open) firstMenuItemRef.current?.focus();
  }, [open]);

  // Ensure overlay closes if switching to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const items: {
    key: string;
    label: string;
    href: string;
    icon: React.ReactNode;
  }[] = [
    { key: "profile", label: "Profile", href: "#", icon: <UserIcon /> },
    { key: "about", label: "About", href: "#", icon: <UserCircleIcon /> },
    { key: "work", label: "Work", href: "#", icon: <BriefcaseIcon /> },
    {
      key: "education",
      label: "Education",
      href: "#",
      icon: <CapIcon />,
    },
    { key: "skills", label: "Code", href: "#", icon: <ChevronsIcon /> },
    {
      key: "projects",
      label: "External Links",
      href: "#",
      icon: <ExternalIcon />,
    },
    { key: "research", label: "Awards", href: "#", icon: <TrophyIcon /> },
  ];
  return (
    <header className={styles.gh_root} role="banner">
      <a href="#main" className={styles.skip_link}>
       {LabelsHeader.skipContentLabel}
      </a>

      <nav className={styles.gh_nav} aria-label="Global">
        <Link href="/" className={styles.brand} aria-label="Home - somen.dev">
          <span className={styles.brand_text}>{t(LabelsHeader?.logoLabel)}</span>
        </Link>

        {/* Desktop navigation */}
        <ul
          className={`${styles.nav_list} ${styles.desktop}`}
          role="menubar"
          aria-label="Primary"
        >
          {items.map((item) => (
            <li key={item.key} className={item.key === activeSession ? styles.activeStyle : ""} role="none">
              <a
                role="menuitem"
                href={item.href}
                aria-label={item.label}
                className={styles.icon_btn}
                title={item.label}
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          ref={triggerBtnRef}
          type="button"
          className={`${styles.hamburger} ${styles.mobile}`}
          aria-label="Open menu"
          aria-controls={menuId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <HamburgerIcon open={open} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${menuId}-label`}
        >
          <div className={styles.overlay_card} id={menuId}>
            <p id={`${menuId}-label`} className={styles.overlay_title}>
              {t(LabelsHeader?.menuLabel)}
            </p>
            <ul className={styles.overlay_list}>
              {items.map((item, idx) => (
                <li key={item.key} className={item.key === activeSession ? styles.activeStyleMobile : ""}>
                  <a
                    ref={idx === 0 ? firstMenuItemRef : undefined}
                    className={styles.overlay_link}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <span className="overlay-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className={styles.close_btn}
              type="button"
              onClick={() => {
                setOpen(false);
                triggerBtnRef.current?.focus();
              }}
              aria-label="Close menu"
            >
              {t(LabelsHeader?.closeLabel)}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default GlobalHeader;
