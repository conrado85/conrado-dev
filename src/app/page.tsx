import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
