import { Quiz } from "@/components/quiz/Quiz";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Test de Sistema Nervioso | Teoría Polivagal</title>
        <meta 
          name="description" 
          content="Descubre cómo responde tu cuerpo al estrés con este test basado en la Teoría Polivagal. Identifica tu patrón de activación del sistema nervioso." 
        />
      </Helmet>
      <Quiz />
    </>
  );
};

export default Index;
