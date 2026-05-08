"use client";

import { type FC, useState } from "react";

interface FlipCardProps {
  front: string;
  back: string;
  className?: string;
}

export const FlipCard: FC<FlipCardProps> = ({ front, back, className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`cursor-pointer perspective-1000 ${className}`}
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setIsFlipped((prev) => !prev);
      }}
    >
      <div
        className={`relative transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        <div className="backface-hidden rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-lg font-medium">{front}</p>
          <p className="mt-2 text-sm text-gray-400">Cliquez pour retourner</p>
        </div>
        <div className="backface-hidden rotate-y-180 absolute inset-0 rounded-xl border bg-blue-50 p-6 shadow-sm">
          <p className="text-base">{back}</p>
        </div>
      </div>
    </div>
  );
};
