"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  backendSkills,
  frontendSkills,
  devOpsSkills,
  databaseSkills,
  languajes,
} from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SubDivider = () => {
  return (
    <motion.div
      className="bg-gray-400 my-12 h-[2px] w-full max-w-lg rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-2 flex flex-col items-center justify-center"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="text-2xl font-semibold mb-8">Languages</div>
      <ul className="flex flex-wrap justify-center max-w-lg gap-2 text-lg text-gray-800">
        {languajes.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 flex flex-row items-center justify-center  gap-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon}
            {skill.title}
          </motion.li>
        ))}
      </ul>
      <SubDivider />
      <div className="text-2xl font-semibold mb-8">Backend</div>
      <ul className="flex flex-wrap justify-center max-w-lg gap-2 text-lg text-gray-800">
        {backendSkills.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 flex flex-row items-center justify-center  gap-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon}
            {skill.title}
          </motion.li>
        ))}
      </ul>
      <SubDivider />
      <div className="text-2xl font-semibold mb-8">Frontend</div>
      <ul className="flex flex-wrap justify-center max-w-lg gap-2 text-lg text-gray-800">
        {frontendSkills.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 flex flex-row items-center justify-center  gap-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon}
            {skill.title}
          </motion.li>
        ))}
      </ul>
      <SubDivider />
      <div className="text-2xl font-semibold mb-8">Database</div>
      <ul className="flex flex-wrap justify-center max-w-lg gap-2 text-lg text-gray-800">
        {databaseSkills.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 flex flex-row items-center justify-center  gap-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon}
            {skill.title}
          </motion.li>
        ))}
      </ul>
      <SubDivider />
      <div className="text-2xl font-semibold mb-8">DevOps</div>
      <ul className="flex flex-wrap justify-center max-w-lg gap-2 text-lg text-gray-800">
        {devOpsSkills.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 flex flex-row items-center justify-center  gap-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon}
            {skill.title}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
