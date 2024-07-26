import FeaturesSection from "@/components/home/featuresSection";
import MainSection from "@/components/home/mainSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header>
        <nav>
          NAVBAR
        </nav>
      </header>

      <MainSection />

      <FeaturesSection />

      <section>
        <h2>Beneficios</h2>
      </section>

      <section>
        <h2>¿Como funciona?</h2>
      </section>

      <section>
        <h2>Llamado a la acción</h2>
      </section>

      <section>
        <h2>Preguntas frecuentes</h2>
      </section>

      <section>
        <h2>Accesibilidad y usabilidad</h2>
      </section>

      <footer>
        <p>© 2024 Mind Tracer</p>
      </footer>

    </main>
  );
}
