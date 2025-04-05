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
          <p
            className={`${styles.heroSubText} mb-7 text-white-100 flex flex-col justify-center items-center`}
          >
            <div className="fsd">Full-Stack Developer</div>
            <div className="and">and</div>
            <div className="cp">CP Enthusiast</div>
          </p>
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

export default Hero;
