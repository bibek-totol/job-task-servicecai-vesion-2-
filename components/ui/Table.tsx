"use client";

import React, { useState } from "react";

export interface TableProps {
  headers: string[];
  rows: (React.ReactNode)[][];
  highlightIndex?: number;
  caption?: string;
  className?: string;
}

export function Table({
  headers,
  rows,
  highlightIndex = -1,
  caption,
  className = "",
}: TableProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Single active element:
  // If mouse is hovering a row, that row is exclusively active.
  // If no row is hovered, fallback to highlightIndex (by default row 0).
  const activeIndex = hoveredIndex !== null ? hoveredIndex : highlightIndex;

  return (
    <div
      className={`table-wrap ${className}`.trim()}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <table>
        {caption && <caption className="visually-hidden">{caption}</caption>}
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => {
            const isHighlighted = activeIndex === rIdx;
            return (
              <tr
                key={rIdx}
                className={isHighlighted ? "highlight is-active" : ""}
                onMouseEnter={() => setHoveredIndex(rIdx)}
              >
                {row.map((cell, cIdx) => (
                  <td key={cIdx}>{cell}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
