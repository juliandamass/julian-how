"use client";

import { Skills } from "@/constants/Profile";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Container from "../layout/Container";
import SectionTitle from "../section/SectionTitle";

const Skill = () => {
  const ref = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [animationState, setAnimationState] = useState<"visible" | "hidden">(
    "hidden",
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.1", "0 -0.1"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.5, 1, 1]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ["100px", "0px", "0px", "-100px"],
  );

  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 1], [0, 1, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.5) {
      setAnimationState("visible");
    } else {
      setAnimationState("hidden");
    }
  });

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hidden: {
      opacity: 0,
      x: 10,
      y: 20,
      scale: 1.5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section id="skill" className="py-12 lg:py-24 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <motion.div ref={ref} style={{ scale, y }}>
            <SectionTitle number={3} title="Skill" />
          </motion.div>
          <motion.div
            ref={skillsRef}
            style={{ opacity, y }}
            variants={listVariants}
            initial="hidden"
            animate={animationState}
          >
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {Skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <li className="flex items-center justify-end gap-2 px-2.5 py-1 bg-white border-2 border-gray-200 rounded-lg">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="w-auto h-5"
                    />
                    <span>{skill.name}</span>
                  </li>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Skill;
