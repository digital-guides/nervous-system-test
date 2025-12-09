import { ProfileResult } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Import illustrations
import illustrationHiper from "@/assets/illustration-hiper.png";
import illustrationColapso from "@/assets/illustration-colapso.png";
import illustrationOscilacion from "@/assets/illustration-oscilacion.png";
import illustrationHipo from "@/assets/illustration-hipo.png";
import illustrationDigestivo from "@/assets/illustration-digestivo.png";

interface ResultScreenProps {
  result: ProfileResult;
  onRestart: () => void;
}

const illustrations: Record<string, string> = {
  hiper: illustrationHiper,
  colapso: illustrationColapso,
  oscilacion: illustrationOscilacion,
  hipo: illustrationHipo,
  digestivo: illustrationDigestivo,
};

const gradientColors: Record<string, string> = {
  hiper: "from-profile-hiper/10 to-option-rose/30",
  colapso: "from-profile-colapso/10 to-option-sage/30",
  oscilacion: "from-profile-oscilacion/10 to-option-cream/30",
  hipo: "from-profile-hipo/10 to-option-lavender/30",
  digestivo: "from-profile-digestivo/10 to-option-sage/30",
};

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  return (
    <div className="min-h-screen flex flex-col px-4 py-8 gradient-feminine">
      <div className="w-full max-w-lg mx-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6 animate-fade-in"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tu resultado</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Illustration */}
        <div 
          className="relative w-40 h-40 mx-auto mb-6 animate-scale-in"
          style={{ animationDelay: '100ms' }}
        >
          <div className={cn(
            "absolute inset-0 rounded-full blur-2xl bg-gradient-to-br animate-pulse-soft",
            gradientColors[result.color]
          )} />
          <img 
            src={illustrations[result.color]} 
            alt={result.title}
            className="relative w-full h-full object-contain animate-float"
            loading="eager"
          />
        </div>

        {/* Result Card */}
        <div 
          className={cn(
            "relative bg-card rounded-3xl p-6 md:p-8 shadow-card mb-6 animate-slide-up overflow-hidden",
          )}
          style={{ animationDelay: '200ms' }}
        >
          {/* Decorative gradient overlay */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-30 pointer-events-none",
            gradientColors[result.color]
          )} />
          
          <div className="relative">
            {/* Emoji */}
            <div className="flex justify-center mb-4">
              <span className="text-5xl">{result.emoji}</span>
            </div>

            <h1 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3 text-center leading-tight">
              {result.title}
            </h1>
            
            <p className={cn(
              "text-center font-semibold mb-6 text-base",
              result.color === 'hiper' && "text-profile-hiper",
              result.color === 'colapso' && "text-profile-colapso",
              result.color === 'oscilacion' && "text-profile-oscilacion",
              result.color === 'hipo' && "text-profile-hipo",
              result.color === 'digestivo' && "text-profile-digestivo",
            )}>
              {result.subtitle}
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-border" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="h-px w-16 bg-border" />
            </div>

            <p className="text-foreground/80 leading-relaxed text-center text-base">
              {result.description}
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-auto space-y-3">
          <Button
            asChild
            size="lg"
            className="w-full h-14 text-base font-semibold rounded-2xl btn-feminine animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              {result.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            onClick={onRestart}
            className="w-full h-12 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-2xl animate-fade-in"
            style={{ animationDelay: '500ms' }}
          >
            <RotateCcw className="mr-2 w-4 h-4" />
            Realizar el test de nuevo
          </Button>
        </div>

        <p 
          className="text-xs text-center text-muted-foreground mt-8 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          ✨ Este test es orientativo y no reemplaza el diagnóstico profesional
        </p>
      </div>
    </div>
  );
}
