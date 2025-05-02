import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../common/Button";
import { Card, CardContent, CardHeader } from "../common/Card";

export const ContactForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [customQuestion, setCustomQuestion] = useState("");

  const PREDEFINED_QUESTIONS = [
    t("contact.form.questions.services", { ns: "forgebytes" }),
    t("contact.form.questions.process", { ns: "forgebytes" }),
    t("contact.form.questions.experience", { ns: "forgebytes" }),
    t("contact.form.questions.pricing", { ns: "forgebytes" }),
    t("contact.form.questions.timeline", { ns: "forgebytes" }),
  ];

  const handleQuestionToggle = (question: string) => {
    setSelectedQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ email, questions: selectedQuestions, customQuestion });
  };

  return (
    <Card variant="elevated" className="mx-auto max-w-2xl p-6">
      <CardHeader
        title={t("contact.form.title", { ns: "forgebytes" })}
        subtitle={t("contact.form.subtitle", { ns: "forgebytes" })}
      />
      <CardContent className="p-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("contact.form.email", { ns: "forgebytes" })}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("contact.form.frequentQuestions", { ns: "forgebytes" })}
            </label>
            <div className="space-y-2">
              {PREDEFINED_QUESTIONS.map((question) => (
                <label
                  key={question}
                  className="flex cursor-pointer items-center space-x-3"
                >
                  <input
                    type="checkbox"
                    checked={selectedQuestions.includes(question)}
                    onChange={() => handleQuestionToggle(question)}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {question}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="customQuestion"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("contact.form.customQuestion", { ns: "forgebytes" })}
            </label>
            <textarea
              id="customQuestion"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full">
            {t("common.send", { ns: "forgebytes" })}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
