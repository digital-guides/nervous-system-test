import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface OptionCardProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

export function OptionCard({ text, isSelected, onClick, index }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "option-card w-full text-left group",
        isSelected && "selected"
      )}
      style={{ 
        animationDelay: `${index * 80}ms`,
        opacity: 0,
        animation: `fade-in 0.4s ease-out ${index * 80}ms forwards`
      }}
    >
      <div className="flex items-start gap-3">
        <div 
          className={cn(
            "flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300",
            isSelected 
              ? "bg-primary border-primary" 
              : "border-muted-foreground/30 group-hover:border-primary/50"
          )}
        >
          {isSelected && (
            <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
          )}
        </div>
        <p className={cn(
          "text-sm md:text-base leading-relaxed transition-colors duration-300",
          isSelected ? "text-foreground font-medium" : "text-foreground/80"
        )}>
          {text}
        </p>
      </div>
    </button>
  );
}
