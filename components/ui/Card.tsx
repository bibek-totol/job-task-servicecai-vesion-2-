import React from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { LinkArrow } from "./Button";

export interface CardProps {
  title: React.ReactNode;
  text?: React.ReactNode;
  iconName?: IconName;
  link?: { label: string; href: string };
  variant?: "default" | "ground" | "petrol" | "mint" | "dark" | "soft" | "dashed" | "white";
  kicker?: string;
  headingTag?: "h2" | "h3" | "h4";
  className?: string;
  children?: React.ReactNode;
  extra?: React.ReactNode;
}

export function Card({
  title,
  text,
  iconName,
  link,
  variant = "default",
  kicker,
  headingTag: Heading = "h3",
  className = "",
  children,
  extra,
}: CardProps) {
  const variantClass = variant !== "default" ? `card-${variant}` : "";

  return (
    <article className={`card ${variantClass} ${className}`.trim()}>
      {iconName && (
        <div className="icon-tile">
          <Icon name={iconName} size={28} strokeWidth={1.75} />
        </div>
      )}

      {kicker && <p className="kicker">{kicker}</p>}

      <Heading>{title}</Heading>

      {text && <p>{text}</p>}

      {children}
      {extra}

      {link && (
        <LinkArrow href={link.href} className="mt-auto pt-2">
          {link.label}
        </LinkArrow>
      )}
    </article>
  );
}

export function LinkCard({
  title,
  text,
  href,
  iconName,
  variant = "",
  className = "",
}: {
  title: string;
  text: string;
  href: string;
  iconName?: IconName;
  variant?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`card ${variant ? `card-${variant}` : ""} ${className}`.trim()}
    >
      {iconName && (
        <span className="icon-inline">
          <Icon name={iconName} size={26} strokeWidth={1.75} />
        </span>
      )}
      <h3>{title}</h3>
      <p>{text}</p>
    </Link>
  );
}

export function Feature({
  iconName,
  title,
  text,
}: {
  iconName: IconName;
  title: string;
  text: string;
}) {
  return (
    <div className="feature">
      <div className="icon-tile sm">
        <Icon name={iconName} size={21} strokeWidth={1.75} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
