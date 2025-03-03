"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-2 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After studying 4 years{" "}
        <span className="font-medium">Accounting at UNICEN</span>, I decided to
        pursue my passion for programming and enroll in a coding bootcamp
        learning the current trends on the market to develop{" "}
        <span className="font-medium">full stack Apps</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem and learn more
        every day. My core stack is{" "}
        <span className="font-medium">React and Next.js</span> for the frontend
        and <span className="font-medium">Nest.js</span> on the backend . I am
        also familiar with Rust and build smart contracts on Stellar network.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        researching new trending tecnologies and staying update in the{" "}
        <span className="font-medium">tech</span> scene. Check out next section{" "}
        <span className="font-medium">👇</span>.
      </p>
    </motion.section>
  );
}
