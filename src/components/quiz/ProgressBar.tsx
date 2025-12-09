import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className={cn("w-full", className)}>
      <div className="progress-bar">
        <div 
          className="progress-bar-fill relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
               style={{ backgroundSize: '200% 100%' }} 
          />
        </div>
      </div>
      {/* Step indicators */}
      <div className="flex justify-between mt-3 px-1">
        {Array.from({ length: total }, (_, i) => (
          <div 
            key={i}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              i < current 
                ? "bg-primary scale-100" 
                : i === current 
                  ? "bg-primary/50 scale-90" 
                  : "bg-muted scale-75"
            )}
          />
        ))}
      </div>
    </div>
  );
}
