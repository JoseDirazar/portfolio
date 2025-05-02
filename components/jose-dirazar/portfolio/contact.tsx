"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { t } = useTranslation();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t("contact.title")}</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        {t("contact.direct")}{" "}
        <a className="underline" href="mailto:jose_f_dirazar@hotmail.com">
          jose_f_dirazar@hotmail.com
        </a>{" "}
        {t("contact.or")}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(t("contact.error"));
            return;
          }

          toast.success(t("contact.success"));
        }}
      >
        <input
          className="borderBlack dark:bg-opacity-80 dark:focus:bg-opacity-100 h-14 rounded-lg px-4 transition-all dark:bg-white dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t("contact.email")}
        />
        <textarea
          className="borderBlack dark:bg-opacity-80 dark:focus:bg-opacity-100 my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:outline-none"
          name="message"
          placeholder={t("contact.message")}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
