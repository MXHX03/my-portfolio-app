import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Terminal from "@/components/Terminal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Process />
      <Terminal />
      <Footer />
    </main>
  );
}
