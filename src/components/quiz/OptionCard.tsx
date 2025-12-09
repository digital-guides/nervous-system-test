import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface OptionCardProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  index: number;
  colorVariant?: 'lavender' | 'rose' | 'sage' | 'cream' | 'periwinkle';
}

export function OptionCard({ text, isSelected, onClick, index, colorVariant = 'lavender' }: OptionCardProps) {
  const colorClasses = {
    lavender: 'bg-option-lavender hover:bg-option-lavender/80',
    rose: 'bg-option-rose hover:bg-option-rose/80',
    sage: 'bg-option-sage hover:bg-option-sage/80',
    cream: 'bg-option-cream hover:bg-option-cream/80',
    periwinkle: 'bg-option-periwinkle hover:bg-option-periwinkle/80',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "option-card w-full text-left group",
        colorClasses[colorVariant],
        isSelected && "selected !bg-primary/10"
      )}
      style={{ 
        animationDelay: `${index * 80}ms`,
        opacity: 0,
        animation: `fade-in 0.5s ease-out ${index * 80}ms forwards`
      }}
    >
      <div className="flex items-start gap-4">
        <div 
          className={cn(
            "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 mt-0.5",
            isSelected 
              ? "bg-primary border-primary scale-110" 
              : "border-foreground/20 group-hover:border-primary/50 group-hover:scale-105"
          )}
        >
          {isSelected && (
            <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
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
