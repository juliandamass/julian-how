"use client";

import { Experiences } from "@/constants/Profile";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef, useState } from "react";
import Container from "../layout/Container";
import SectionTitle from "../section/SectionTitle";

const ExperiencesAccordion = () => {
  const [openedIndex, setOpenedIndex] = useState<number[]>([0]);

  return (
    <div>
      {Experiences.map((experience, index) => (
        <div
          key={index}
          className="lg:grid lg:grid-cols-[2fr_auto_6fr] mb-4 lg:mb-0 border-b border-gray-400 lg:border-none"
        >
          <div>
            <button
              className={cn(
                "inline-flex flex-col items-start justify-start text-left cursor-pointer mb-4 lg:mb-0",
                index !== Experiences.length - 1 && "lg:mb-10",
              )}
              onClick={() => setOpenedIndex([index])}
            >
              <p className="text-xl font-bold leading-tight lg:leading-normal">
                {experience.company}
              </p>
              <p className="text-sm text-gray-600 leading-none">
                {experience.start} - {experience.end}
              </p>
            </button>
          </div>
          <div className="relative hidden lg:flex flex-col items-center pl-8 pr-4">
            <button
              className={cn(
                "p-1 rounded-full border border-dashed border-gray-800 transition-all cursor-pointer",
                openedIndex.includes(index) &&
                  "border-solid border-yellow-400 bg-yellow-100",
              )}
              onClick={() => setOpenedIndex([index])}
            >
              <div
                className={cn(
                  "w-4 h-4 rounded-full bg-gray-800 transition-all",
                  openedIndex.includes(index) && "bg-yellow-400",
                )}
              ></div>
            </button>
            {index !== Experiences.length - 1 && (
              <div
                className={cn(
                  "w-px h-full bg-transparent border-r border-dashed border-gray-800 transition-all",
                  openedIndex.includes(index) && "border-yellow-400",
                )}
              ></div>
            )}
          </div>
          <div
            className={cn(
              "w-full space-y-4 mb-4 lg:mb-0",
              index !== Experiences.length - 1 && "lg:mb-10",
            )}
          >
            <button
              className="flex items-center gap-2 cursor-pointer text-left"
              onClick={() => setOpenedIndex([index])}
            >
              <span className="text-xl font-bold">{experience.position}</span>{" "}
              <ArrowDown
                className={cn(
                  "relative top-1 w-4 h-4 transition-all",
                  openedIndex.includes(index) && "-top-1 rotate-180",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {openedIndex.includes(index) && (
                <motion.ul
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden space-y-1 pl-4 list-disc"
                >
                  {experience.details.map((detail, detailKey) => (
                    <li key={detailKey}>{detail}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["0 1.1", "0 -0.1"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.5, 1, 1]);

  return (
    <section id="experience" className="py-10 lg:py-20 bg-gray-100">
      <Container size="lg">
        <motion.div ref={experienceRef} style={{ scale }}>
          <div className="flex flex-col gap-6 lg:gap-8">
            <SectionTitle number={2} title="Experience" />
            <ExperiencesAccordion />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
