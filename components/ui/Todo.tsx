import React from "react";

export function Todo({
  children,
  block = false,
  className = "",
}: {
  children: React.ReactNode;
  block?: boolean;
  className?: string;
}) {
  if (block) {
    return (
      <div
        className={`todo block p-3 rounded-xl border border-dashed border-[#D4B84A] text-sm my-3 ${className}`}
      >
        [{children}]
      </div>
    );
  }

  return (
    <span
      className={`todo inline-block rounded px-1.5 py-0.5 text-xs font-medium tracking-tight ${className}`}
    >
      [{children}]
    </span>
  );
}
