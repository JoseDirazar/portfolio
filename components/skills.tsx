"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  backendSkills,
  frontendSkills,
  devOpsSkills,
  databaseSkills,
  languajes,
  testingSkills,
  integrationSkills,
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
      className="my-12 h-[2px] w-full max-w-lg rounded-full bg-gray-400 sm:block"
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
      className="mb-28 flex max-w-[53rem] scroll-mt-28 flex-col items-center justify-center text-center sm:mb-2"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="mb-8 text-2xl font-semibold">Languages</div>
      <ul className="flex max-w-lg flex-wrap justify-center gap-2 text-lg text-gray-800">
        {languajes.map((skill, index) => (
          <motion.li
            className="borderBlack flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
      <div className="mb-8 text-2xl font-semibold">Backend</div>
      <ul className="flex max-w-lg flex-wrap justify-center gap-2 text-lg text-gray-800">
        {backendSkills.map((skill, index) => (
          <motion.li
            className="borderBlack flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
      <div className="mb-8 text-2xl font-semibold">Frontend</div>
      <ul className="flex max-w-lg flex-wrap justify-center gap-2 text-lg text-gray-800">
        {frontendSkills.map((skill, index) => (
          <motion.li
            className="borderBlack flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
      <div className="mb-8 text-2xl font-semibold">Database</div>
      <ul className="flex max-w-lg flex-wrap justify-center gap-2 text-lg text-gray-800">
        {databaseSkills.map((skill, index) => (
          <motion.li
            className="borderBlack flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
      <div className="mb-8 text-2xl font-semibold">DevOps</div>
      <ul className="flex max-w-lg flex-wrap justify-center gap-2 text-lg text-gray-800">
        {devOpsSkills.map((skill, index) => (
          <motion.li
            className="borderBlack flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
      <div className="mb-8 text-2xl font-semibold">Testing</div>
      <ul className="flex max-w-lg flex-wrap justify-center gap-2 text-lg text-gray-800">
        {testingSkills.map((skill, index) => (
          <motion.li
            className="borderBlack flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon && skill.icon}
            {skill.title}
          </motion.li>
        ))}
      </ul>
      <SubDivider />
      <div className="mb-8 text-2xl font-semibold">Integrations</div>
      <ul className="flex max-w-lg flex-wrap justify-center gap-2 text-lg text-gray-800">
        {integrationSkills.map((skill, index) => (
          <motion.li
            className="borderBlack flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon && skill.icon}
            {skill.title}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
