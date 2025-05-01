"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "next-themes";
import { FaArrowCircleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { getTranslatedData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const { experiencesData } = getTranslatedData(t);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-2">
      <SectionHeading>{t("experience.title", { ns: "data" })}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  resolvedTheme === "light"
                    ? "#f3f4f6"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  resolvedTheme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  resolvedTheme === "light"
                    ? "white"
                    : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <a
                target="_blank"
                href={item.url}
                className="!mt-1 flex items-center justify-center gap-2 bg-neutral-700 px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-neutral-400 hover:text-gray-950 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/20 dark:hover:text-white md:text-base w-fit rounded"
              >
                {t("projects.view", { ns: "data" })} <FaArrowCircleRight />
              </a>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
