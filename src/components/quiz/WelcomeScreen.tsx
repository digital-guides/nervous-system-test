import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Heart, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-background">
      <div className="w-full max-w-lg mx-auto text-center">
        {/* Icon */}
        <div 
          className="relative w-20 h-20 mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-soft" />
          <div className="absolute inset-2 bg-primary/20 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 
          className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          Test de Sistema Nervioso
        </h1>

        <p 
          className="text-lg text-muted-foreground mb-3 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Basado en la Teoría Polivagal
        </p>

        <p 
          className="text-base text-foreground/70 mb-10 max-w-md mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          Descubre cómo responde tu cuerpo al estrés y qué patrón de activación predomina en tu sistema nervioso.
        </p>

        {/* Features */}
        <div 
          className="grid grid-cols-3 gap-4 mb-10 animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          <div className="flex flex-col items-center p-4 rounded-xl bg-card/50 shadow-soft">
            <Sparkles className="w-6 h-6 text-primary mb-2" />
            <span className="text-xs text-muted-foreground">10 preguntas</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card/50 shadow-soft">
            <Heart className="w-6 h-6 text-primary mb-2" />
            <span className="text-xs text-muted-foreground">5 perfiles</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card/50 shadow-soft">
            <Brain className="w-6 h-6 text-primary mb-2" />
            <span className="text-xs text-muted-foreground">3 minutos</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          onClick={onStart}
          size="lg"
          className="w-full h-14 text-base font-medium rounded-xl animate-fade-in"
          style={{ animationDelay: '500ms' }}
        >
          Comenzar el test
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p 
          className="text-xs text-muted-foreground mt-6 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          Tus respuestas son completamente privadas
        </p>
      </div>
    </div>
  );
}
