export type ProfileType = 'hiper' | 'colapso' | 'oscilacion' | 'hipo' | 'digestivo';

export interface Option {
  text: string;
  profile: ProfileType;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Cuando algo te estresa, ¿cuál reacción describe más tu cuerpo?",
    options: [
      { text: "Me tenso de inmediato y siento que tengo que reaccionar YA.", profile: "hiper" },
      { text: "Me quedo sin energía, me apago o me bloqueo.", profile: "colapso" },
      { text: "Primero me acelero y después me desplomo.", profile: "oscilacion" },
      { text: "No siento casi nada… sigo en automático.", profile: "hipo" },
      { text: "Siento malestar digestivo o náuseas al instante.", profile: "digestivo" },
    ],
  },
  {
    id: 2,
    question: "¿Cómo suelen ser tus mañanas?",
    options: [
      { text: "Me despierto acelerada/o, como lista/o para correr.", profile: "hiper" },
      { text: "Siento que necesito horas para arrancar.", profile: "colapso" },
      { text: "Algunas mañanas estoy encendida/o y otras totalmente agotada/o.", profile: "oscilacion" },
      { text: "Me levanto neutral, sin emoción, todo se siente igual.", profile: "hipo" },
      { text: "Me levanto con malestar digestivo o molestias.", profile: "digestivo" },
    ],
  },
  {
    id: 3,
    question: "¿Cómo se siente tu energía durante el día?",
    options: [
      { text: "Estoy alerta, tensa/o, como si algo fuera urgente.", profile: "hiper" },
      { text: "Quiero acostarme o desaparecer.", profile: "colapso" },
      { text: "Voy a mil y después me apago sin aviso.", profile: "oscilacion" },
      { text: "Hago todo en piloto automático.", profile: "hipo" },
      { text: "Mi cuerpo reacciona con digestión irregular.", profile: "digestivo" },
    ],
  },
  {
    id: 4,
    question: "Cuando te abruman las emociones…",
    options: [
      { text: "Me acelero.", profile: "hiper" },
      { text: "Me desconecto.", profile: "colapso" },
      { text: "Reacciono fuerte y luego me desplomo.", profile: "oscilacion" },
      { text: "No siento casi nada.", profile: "hipo" },
      { text: "Siento un vacío estomacal o presión abdominal.", profile: "digestivo" },
    ],
  },
  {
    id: 5,
    question: "¿Cómo respondes al estrés social?",
    options: [
      { text: "Hipervigilancia: observo todo, me tenso.", profile: "hiper" },
      { text: "Me repliego o busco no estar ahí.", profile: "colapso" },
      { text: "A veces hiperactiva/o, a veces ausente.", profile: "oscilacion" },
      { text: "No conecto emocionalmente, pero actúo.", profile: "hipo" },
      { text: "Mi estómago sufre el impacto.", profile: "digestivo" },
    ],
  },
  {
    id: 6,
    question: "¿Cómo manejas conflictos o discusiones?",
    options: [
      { text: "Mi cuerpo entra en modo lucha/huida.", profile: "hiper" },
      { text: "Colapso y quiero escapar mentalmente.", profile: "colapso" },
      { text: "Subo mucho y luego me apago.", profile: "oscilacion" },
      { text: "No siento rabia, tristeza ni nada… solo sigo.", profile: "hipo" },
      { text: "Me afecta a nivel físico, especialmente digestivo.", profile: "digestivo" },
    ],
  },
  {
    id: 7,
    question: "¿Cómo describirías tu conexión contigo misma/o?",
    options: [
      { text: "Siento demasiado, a veces me abruma.", profile: "hiper" },
      { text: "No siento energía ni motivación.", profile: "colapso" },
      { text: "Cambian mis estados bruscamente.", profile: "oscilacion" },
      { text: "Me cuesta percibir mi cuerpo y mis emociones.", profile: "hipo" },
      { text: "Mi cuerpo habla más que yo, sobre todo el estómago.", profile: "digestivo" },
    ],
  },
  {
    id: 8,
    question: "¿Cómo se manifiesta el estrés en tu cuerpo?",
    options: [
      { text: "Taquicardia, tensión, respiración corta.", profile: "hiper" },
      { text: "Fatiga, pesadez, falta de fuerza.", profile: "colapso" },
      { text: "Pico de ansiedad → bajón energético.", profile: "oscilacion" },
      { text: "Desconexión sensorial o emocional.", profile: "hipo" },
      { text: "Náuseas, diarrea, estreñimiento.", profile: "digestivo" },
    ],
  },
  {
    id: 9,
    question: "¿Cómo te recuperas después de un día difícil?",
    options: [
      { text: "Me cuesta bajar revoluciones.", profile: "hiper" },
      { text: "Necesito aislarme o dormir mucho.", profile: "colapso" },
      { text: "Algunos días me relajo, otros caigo.", profile: "oscilacion" },
      { text: "Sigo funcionando igual… no noto diferencia.", profile: "hipo" },
      { text: "Mi digestión es la primera en reaccionar.", profile: "digestivo" },
    ],
  },
  {
    id: 10,
    question: "¿Qué patrón describe mejor tu vida actual?",
    options: [
      { text: "Siempre en alerta, siempre a mil.", profile: "hiper" },
      { text: "Cansancio profundo, apagamiento.", profile: "colapso" },
      { text: "Subo y bajo sin control.", profile: "oscilacion" },
      { text: "Vivo desconectada/o de mis emociones.", profile: "hipo" },
      { text: "Mi estómago es el termómetro de mi estrés.", profile: "digestivo" },
    ],
  },
];

export interface ProfileResult {
  id: ProfileType;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  emoji: string;
  color: string;
}

export const profileResults: Record<ProfileType, ProfileResult> = {
  hiper: {
    id: 'hiper',
    title: 'Hiperactivación Simpática',
    subtitle: 'Tu sistema nervioso está en modo ALARMA',
    description: 'Tu cuerpo cree que debe defenderse todo el tiempo. Esto explica tu tensión, tus pensamientos acelerados y esa sensación de "estar alerta incluso en calma". Buena noticia: este patrón se regula muy bien con técnicas de descarga somática y seguridad interna.',
    cta: 'Aprende a bajar el modo alarma',
    emoji: '⚡',
    color: 'hiper',
  },
  colapso: {
    id: 'colapso',
    title: 'Colapso / Freeze',
    subtitle: 'Tu sistema nervioso está en modo APAGADO',
    description: 'Tu cuerpo se protege bajando energía, apagando motivación y desconectándote emocionalmente. No es flojera, es biología. Buena noticia: existen prácticas suaves que reactivan tu energía sin forzarla.',
    cta: 'Aprende a salir del modo apagado',
    emoji: '🌙',
    color: 'colapso',
  },
  oscilacion: {
    id: 'oscilacion',
    title: 'Oscilación',
    subtitle: 'Tu sistema nervioso está subiendo y bajando sin estabilidad',
    description: 'A veces estás acelerada, a veces agotada. Este vaivén desgasta muchísimo, pero también es un signo claro de que tu sistema necesita regulación.',
    cta: 'Aprende a estabilizar tus ciclos internos',
    emoji: '🌊',
    color: 'oscilacion',
  },
  hipo: {
    id: 'hipo',
    title: 'Hipoactivación Emocional',
    subtitle: 'Tu cuerpo funciona… pero tú no te sientes presente',
    description: 'Hay desconexión emocional, baja sensibilidad y funcionamiento automático. Es un mecanismo de supervivencia que tu cuerpo aprendió para protegerte.',
    cta: 'Aprende a reconectar sin abrumarte',
    emoji: '🌫️',
    color: 'hipo',
  },
  digestivo: {
    id: 'digestivo',
    title: 'Mixto Sensorial + Digestivo',
    subtitle: 'Tu sistema nervioso usa la digestión como vía de expresión',
    description: 'Náuseas, estreñimiento, diarrea, mareos… el eje intestino–cerebro está sobrecargado. Tu cuerpo procesa el estrés a través del sistema digestivo.',
    cta: 'Aprende a calmar el eje intestino–cerebro',
    emoji: '🍃',
    color: 'digestivo',
  },
};

// Priority for tie-breaking (highest to lowest)
export const tieBreakerPriority: ProfileType[] = [
  'oscilacion',
  'digestivo',
  'hipo',
  'hiper',
  'colapso',
];
