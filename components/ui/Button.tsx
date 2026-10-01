import React from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "mint" | "teal" | "dark" | "ghost" | "outline";
  size?: "default" | "sm";
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  variant = "mint",
  size = "default",
  arrow = false,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const cls = `btn btn-${variant}${size === "sm" ? " btn-sm" : ""} ${className}`.trim();

  const iconElement = arrow ? (
    <Icon name="arrow" size={size === "sm" ? 16 : 18} strokeWidth={2} />
  ) : null;

  if (href) {
    return (
      <Link href={href} className={cls} target={target} rel={rel}>
        {children}
        {iconElement}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {iconElement}
    </button>
  );
}

export function LinkArrow({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-arrow ${className}`.trim()}>
      <span>{children}</span>
      <Icon name="arrow" size={16} strokeWidth={2} />
    </Link>
  );
}

export function BtnRow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`btn-row ${className}`.trim()}>{children}</div>;
}
