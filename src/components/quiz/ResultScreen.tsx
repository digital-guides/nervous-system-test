import { ProfileResult } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultScreenProps {
  result: ProfileResult;
  onRestart: () => void;
}

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const colorClasses: Record<string, string> = {
    hiper: "bg-profile-hiper/10 border-profile-hiper/30 text-profile-hiper",
    colapso: "bg-profile-colapso/10 border-profile-colapso/30 text-profile-colapso",
    oscilacion: "bg-profile-oscilacion/10 border-profile-oscilacion/30 text-profile-oscilacion",
    hipo: "bg-profile-hipo/10 border-profile-hipo/30 text-profile-hipo",
    digestivo: "bg-profile-digestivo/10 border-profile-digestivo/30 text-profile-digestivo",
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-10 bg-background">
      <div className="w-full max-w-lg mx-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <p 
            className="text-sm font-medium text-primary uppercase tracking-wider mb-2 animate-fade-in"
          >
            Tu resultado
          </p>
          <div 
            className={cn(
              "inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 border-2 animate-scale-in",
              colorClasses[result.color]
            )}
            style={{ animationDelay: '100ms' }}
          >
            <span className="text-4xl">{result.emoji}</span>
          </div>
        </div>

        {/* Result Card */}
        <div 
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card mb-8 animate-slide-up"
          style={{ animationDelay: '200ms' }}
        >
          <h1 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3 text-center">
            {result.title}
          </h1>
          
          <p className={cn(
            "text-center font-medium mb-6 text-base",
            result.color === 'hiper' && "text-profile-hiper",
            result.color === 'colapso' && "text-profile-colapso",
            result.color === 'oscilacion' && "text-profile-oscilacion",
            result.color === 'hipo' && "text-profile-hipo",
            result.color === 'digestivo' && "text-profile-digestivo",
          )}>
            {result.subtitle}
          </p>

          <div className="w-16 h-0.5 bg-border mx-auto mb-6" />

          <p className="text-foreground/80 leading-relaxed text-center">
            {result.description}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-auto space-y-3">
          <Button
            asChild
            size="lg"
            className="w-full h-14 text-base font-medium rounded-xl animate-fade-in"
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
            className="w-full h-12 text-muted-foreground hover:text-foreground animate-fade-in"
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
          Este test es orientativo y no reemplaza el diagnóstico profesional
        </p>
      </div>
    </div>
  );
}
