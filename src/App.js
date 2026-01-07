import React from "react";
import Header from "./components/navbar/Header";
import Intro from "./components/navbar/Intro";
import Aboutme from "./components/navbar/Aboutme";
import Skills from "./components/navbar/Skills";
import Projects from "./components/navbar/Projects";
import Experience from "./components/navbar/Experience";
import Contact from "./components/navbar/Contact";
import ClickSpark from "./components/ClickSpark";
import Ballpit from "./components/Ballpit";

function App() {
  return (
    <>

      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={23}
          sparkRadius={69}
          sparkCount={8}
          duration={400}
          easing="ease-out"
          extraScale={1}
        />
      </div>

      {/* 🧱 WEBSITE CONTENT */}
      <div style={{ position: "relative", zIndex: 0 }}>
        <Header />
        <Intro />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
