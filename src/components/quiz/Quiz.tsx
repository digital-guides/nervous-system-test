import { useState, useCallback } from "react";
import { 
  questions, 
  profileResults, 
  tieBreakerPriority, 
  ProfileType 
} from "@/data/quizData";
import { WelcomeScreen } from "./WelcomeScreen";
import { QuestionScreen } from "./QuestionScreen";
import { ResultScreen } from "./ResultScreen";

type QuizState = "welcome" | "questions" | "result";

export function Quiz() {
  const [state, setState] = useState<QuizState>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<ProfileType[]>([]);

  const handleStart = useCallback(() => {
    setState("questions");
    setCurrentQuestion(0);
    setAnswers([]);
  }, []);

  const handleAnswer = useCallback((profile: ProfileType) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = profile;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setState("result");
    }
  }, [answers, currentQuestion]);

  const calculateResult = useCallback((): ProfileType => {
    const scores: Record<ProfileType, number> = {
      hiper: 0,
      colapso: 0,
      oscilacion: 0,
      hipo: 0,
      digestivo: 0,
    };

    answers.forEach((profile) => {
      if (profile) {
        scores[profile]++;
      }
    });

    const maxScore = Math.max(...Object.values(scores));
    const topProfiles = (Object.keys(scores) as ProfileType[]).filter(
      (profile) => scores[profile] === maxScore
    );

    if (topProfiles.length === 1) {
      return topProfiles[0];
    }

    // Tie-breaker using priority
    for (const priority of tieBreakerPriority) {
      if (topProfiles.includes(priority)) {
        return priority;
      }
    }

    return topProfiles[0];
  }, [answers]);

  const handleRestart = useCallback(() => {
    setState("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
  }, []);

  if (state === "welcome") {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (state === "questions") {
    return (
      <QuestionScreen
        question={questions[currentQuestion]}
        currentIndex={currentQuestion}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        previousAnswer={answers[currentQuestion]}
      />
    );
  }

  if (state === "result") {
    const resultProfile = calculateResult();
    return (
      <ResultScreen 
        result={profileResults[resultProfile]} 
        onRestart={handleRestart}
      />
    );
  }

  return null;
}
