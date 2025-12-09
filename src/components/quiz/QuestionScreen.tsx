import { useState, useEffect } from "react";
import { Question, ProfileType } from "@/data/quizData";
import { ProgressBar } from "./ProgressBar";
import { OptionCard } from "./OptionCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (profile: ProfileType) => void;
  previousAnswer?: ProfileType;
}

const optionColors = [
  'lavender',
  'rose',
  'sage',
  'cream',
  'periwinkle',
] as const;

export function QuestionScreen({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  previousAnswer,
}: QuestionScreenProps) {
  const [selected, setSelected] = useState<ProfileType | null>(previousAnswer || null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setSelected(previousAnswer || null);
    setIsExiting(false);
  }, [question.id, previousAnswer]);

  const handleContinue = () => {
    if (selected) {
      setIsExiting(true);
      setTimeout(() => {
        onAnswer(selected);
      }, 200);
    }
  };

  return (
    <div className={cn(
      "min-h-screen flex flex-col px-4 py-6 md:py-10 gradient-feminine transition-opacity duration-300",
      isExiting && "opacity-0"
    )}>
      <div className="w-full max-w-lg mx-auto flex-1 flex flex-col">
        <ProgressBar 
          current={currentIndex + 1} 
          total={totalQuestions} 
          className="mb-6 animate-fade-in"
        />

        {/* Question number badge */}
        <div 
          className="flex justify-center mb-4 animate-fade-in"
          style={{ animationDelay: '50ms' }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Pregunta {currentIndex + 1} de {totalQuestions}
          </span>
        </div>

        <div className="flex-1 flex flex-col">
          <h2 
            className="font-display text-2xl md:text-3xl font-medium text-foreground leading-snug mb-6 text-center animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            {question.question}
          </h2>

          {/* Microcopy */}
          <p 
            className="text-sm text-muted-foreground text-center mb-6 animate-fade-in italic"
            style={{ animationDelay: '150ms' }}
          >
            Elige la descripción que más se acerque a tu experiencia interna
          </p>

          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <OptionCard
                key={option.profile}
                text={option.text}
                isSelected={selected === option.profile}
                onClick={() => setSelected(option.profile)}
                index={index}
                colorVariant={optionColors[index]}
              />
            ))}
          </div>

          <div className="mt-auto pt-4">
            <Button
              onClick={handleContinue}
              disabled={!selected}
              className={cn(
                "w-full h-14 text-base font-semibold rounded-2xl transition-all duration-300",
                selected ? "btn-feminine" : "bg-muted text-muted-foreground"
              )}
              style={{ 
                opacity: 0,
                animation: 'fade-in 0.5s ease-out 0.4s forwards'
              }}
            >
              {currentIndex === totalQuestions - 1 ? 'Ver mi resultado' : 'Continuar'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
