import type { FC } from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
}

export const ProgressBar: FC<ProgressBarProps> = ({ value, max = 100, label, className = "" }) => {
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="mb-1 flex justify-between text-sm">
          <span>{label}</span>
          <span>{percent}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};
