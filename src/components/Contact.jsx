import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { githublink, instagram, twitter, linkedin } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Priyansh Verma",
          from_email: form.email,
          to_email: "priyanshverma444.work@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-16 overflow-hidden relative`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <div className="earth-div xl:flex-1 xl:h-[835px] md:h-[1000px] h-[600px]">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-[675px] md:h-[750px] h-[400px]"
        >
          <div className="flex justify-between items-start">
            <div className="above-earth-1">
              <div
                onClick={() =>
                  window.open("https://github.com/priyanshverma444", "_blank")
                }
                className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={githublink} alt="Github" />
              </div>
            </div>
            <div className="above-earth-2">
              <div
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/priyanshverma444?igsh=MXdvZ2t1Y3p3ZmExdw==",
                    "_blank"
                  )
                }
                className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={instagram} alt="Instagram" />
              </div>
            </div>
          </div>
          <EarthCanvas />
          <div className="flex justify-between items-end">
            <div className="below-earth-1">
              <div
                onClick={() =>
                  window.open(
                    "https://x.com/priyansh__444?t=3RTCYIV0yHcVWQxgWiTX7Q&s=09",
                    "_blank"
                  )
                }
                className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={twitter} alt="Twitter" />
              </div>
            </div>
            <div className="below-earth-2">
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/priyanshverma444/",
                    "_blank"
                  )
                }
                className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={linkedin} alt="Linkedin" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
