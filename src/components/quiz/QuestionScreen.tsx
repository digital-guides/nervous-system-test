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
      "min-h-screen flex flex-col px-4 py-6 md:py-10 bg-background transition-opacity duration-300",
      isExiting && "opacity-0"
    )}>
      <div className="w-full max-w-lg mx-auto flex-1 flex flex-col">
        <ProgressBar 
          current={currentIndex + 1} 
          total={totalQuestions} 
          className="mb-8 animate-fade-in"
        />

        <div className="flex-1 flex flex-col">
          <h2 
            className="font-display text-xl md:text-2xl font-medium text-foreground leading-snug mb-8 animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            {question.question}
          </h2>

          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <OptionCard
                key={option.profile}
                text={option.text}
                isSelected={selected === option.profile}
                onClick={() => setSelected(option.profile)}
                index={index}
              />
            ))}
          </div>

          <div className="mt-auto pt-6">
            <Button
              onClick={handleContinue}
              disabled={!selected}
              className="w-full h-14 text-base font-medium rounded-xl transition-all duration-300"
              style={{ 
                opacity: 0,
                animation: 'fade-in 0.4s ease-out 0.5s forwards'
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
