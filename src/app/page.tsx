import Nav from "./components/nav/Nav";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Experience from "./sections/experience/Experience";
import Landing from "./sections/landing/Landing";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";





export default function Home() {
  return (
    <main>
      <Landing />
      <div className="relative top-0 w-full">
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}
