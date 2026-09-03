import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { dp } from "../assets";

const Hero = () => {
  return (
    <>
      <section
        className={`w-full h-screen flex flex-col lg:flex-row justify-center items-center`}
      >
        <div className={`mx-auto flex justify-center items-center my-5`}>
          <img className="rounded-full w-72 ml-auto" src={dp} alt="DP" />
        </div>
        <div
          className={`mx-auto flex flex-col justify-center items-center lg:pt-20`}
        >
          <h1
            className={`${styles.heroHeadText} text-white my-7 text-center flex flex-col md:flex-row`}
          >
            Hi, I'm<span className="text-[#915EFF] md:ml-4">Priyansh</span>
          </h1>
          <TypingLines
            className={`${styles.heroSubText} mb-7 text-white-100 flex flex-col justify-center items-center`}
            lines={[
              { text: "Full-Stack Developer", cls: "fsd" },
              { text: "Competitive Programmer", cls: "cp" },
              { text: "Blockchain Enthusiast", cls: "be" },
            ]}
          />
          <a
            href="/Priyansh_Verma_Resume.pdf"
            download="Priyansh_Verma_Resume.pdf"
            className="bg-violet-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
};

const TypingLines = ({ lines = [], className = "", speed = 45, pause = 600 }) => {
  const [displayed, setDisplayed] = useState(lines.map(() => ""));
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    let charIndex = 0;
    const lineText = lines[currentLine].text || "";
    const interval = setInterval(() => {
      charIndex += 1;
      setDisplayed((prev) => {
        const next = [...prev];
        next[currentLine] = lineText.slice(0, charIndex);
        return next;
      });
      if (charIndex >= lineText.length) {
        clearInterval(interval);
        setTimeout(() => setCurrentLine((c) => c + 1), pause);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentLine, lines, speed, pause]);

  return (
    <div className={className}>
      {lines.map((ln, idx) => (
        <div key={idx} className={ln.cls}>
          <span>{displayed[idx]}</span>
          {idx === currentLine && currentLine < lines.length && (
            <span className="ml-1 inline-block animate-pulse">|</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Hero;
