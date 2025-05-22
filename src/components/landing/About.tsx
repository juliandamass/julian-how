"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../layout/Container";
import SectionTitle from "../section/SectionTitle";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div style={{ scale }}>
      <section id="about" className="py-20 lg:py-36">
        <Container>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
            <SectionTitle number={1} title="About" />
            <div>
              <p className="text-lg">
                👋 Hi, I am a Frontend Developer with 7+ years of experience
                building responsive, user-friendly web and mobile applications.
                I specialize in creating clean, visually engaging interfaces
                that deliver smooth user experiences. With a strong eye for
                design and detail, I combine creativity and technical skill to
                develop products that are both beautiful and high-performing.
                Skilled in React, Flutter, Vue, WordPress, and modern frontend
                technologies. Passionate about clean code, UI/UX, and continuous
                learning. Currently expanding into Fullstack development with 6
                months hands-on experience in Node.js, MongoDB, and building
                backend APIs. Passionate about end-to-end product delivery.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
};

export default About;
