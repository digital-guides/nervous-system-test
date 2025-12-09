import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import illustrationWelcome from "@/assets/illustration-welcome.png";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 gradient-feminine">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Illustration */}
        <div 
          className="relative w-48 h-48 mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <img 
            src={illustrationWelcome} 
            alt="Mujer en calma con la mano en el corazón" 
            className="relative w-full h-full object-contain animate-float"
            loading="eager"
          />
        </div>

        {/* Decorative element */}
        <div 
          className="flex items-center justify-center gap-2 mb-6 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          <div className="h-px w-12 bg-primary/30" />
          <Sparkles className="w-4 h-4 text-primary/60" />
          <div className="h-px w-12 bg-primary/30" />
        </div>

        {/* Title */}
        <h1 
          className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4 animate-fade-in leading-tight"
          style={{ animationDelay: '150ms' }}
        >
          Test de Sistema Nervioso
        </h1>

        <p 
          className="text-lg text-primary font-medium mb-4 animate-fade-in italic"
          style={{ animationDelay: '250ms' }}
        >
          Basado en la Teoría Polivagal
        </p>

        <p 
          className="text-base text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: '350ms' }}
        >
          Descubre cómo responde tu cuerpo al estrés y qué patrón de activación predomina en tu sistema nervioso.
        </p>

        {/* Features */}
        <div 
          className="grid grid-cols-3 gap-3 mb-10 animate-fade-in"
          style={{ animationDelay: '450ms' }}
        >
          <div className="flex flex-col items-center p-4 rounded-2xl bg-option-lavender/50 backdrop-blur-sm">
            <span className="text-2xl mb-2">✨</span>
            <span className="text-xs text-foreground/70 font-medium">10 preguntas</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-option-rose/50 backdrop-blur-sm">
            <span className="text-2xl mb-2">🌸</span>
            <span className="text-xs text-foreground/70 font-medium">5 perfiles</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-option-sage/50 backdrop-blur-sm">
            <span className="text-2xl mb-2">🧘‍♀️</span>
            <span className="text-xs text-foreground/70 font-medium">3 minutos</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          onClick={onStart}
          size="lg"
          className="w-full h-14 text-base font-semibold rounded-2xl btn-feminine animate-fade-in"
          style={{ animationDelay: '550ms' }}
        >
          Comenzar el test
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p 
          className="text-xs text-muted-foreground mt-8 animate-fade-in"
          style={{ animationDelay: '650ms' }}
        >
          ✨ Tus respuestas son completamente privadas
        </p>
      </div>
    </div>
  );
}
