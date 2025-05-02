import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "../common/Card";

export const ServicesSection = () => {
  const { t } = useTranslation();

  const SERVICES = [
    {
      title: t("services.webDevelopment.title", { ns: "forgebytes" }),
      description: t("services.webDevelopment.description", {
        ns: "forgebyteslab",
      }),
      icon: "🌐",
    },
    {
      title: t("services.mobileDevelopment.title", { ns: "forgebytes" }),
      description: t("services.mobileDevelopment.description", {
        ns: "forgebyteslab",
      }),
      icon: "📱",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {t("services.title", { ns: "forgebytes" })}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("services.subtitle", { ns: "forgebytes" })}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <Card key={service.title} variant="elevated">
              <CardContent>
                <div className="itens-center flex justify-between">
                  <CardHeader title={service.title} className="mb-2" />
                  <div className="mb-4 text-4xl">{service.icon}</div>
                </div>

                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
