import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ToggleTheme from "../components/ToggleTheme.jsx";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";
import Coursework from "../components/sections/Coursework.jsx";
import Research from "../components/sections/Research.jsx";
import Navbar from "../components/sections/Navbar.jsx";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods?.autoInit?.();
  }, [location.pathname]);

  return (
    <div className="bg-zinc-200 dark:bg-zinc-800 min-h-screen">
  <Navbar />
  <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
    <ToggleTheme switchTheme={switchTheme} />
    <Hero />
    <Projects />
    <EducationAndExperience />
    <Coursework />
    <Research />
    <Skills />
    <Contact />
    <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
    <Footer theme={theme} />
  </div>
</div>

  );
}

export default Homepage;
