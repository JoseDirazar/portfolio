import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "../common/Card";
import { A } from "../common/A";

export const ClientsSection = () => {
  const { t } = useTranslation();

  const projects = ["client1", "client2", "client3", "client4"];

  return (
    <section className="bg-white py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {t("clients.title", { ns: "forgebytes" })}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("clients.subtitle", { ns: "forgebytes" })}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((clientId) => (
            <Card
              key={clientId}
              variant="elevated"
              className="transition-shadow duration-300 hover:shadow-xl"
            >
              <CardContent>
                <div className="flex items-center justify-between">
                  <CardHeader
                    title={t(`clients.projects.${clientId}.name`, {
                      ns: "forgebyteslab",
                    })}
                    className={`${t(`clients.projects.${clientId}.font`, { ns: "forgebytes" })}`}
                  />
                  <img
                    src={t(`clients.projects.${clientId}.img'}`)}
                    alt={t(`clients.projects.${clientId}.name'}`)}
                    className={`object-cover ${clientId === "client4" ? "w-16 lg:w-28" : "w-24 lg:w-42"}`}
                  />
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {t(`clients.projects.${clientId}.description`, {
                    ns: "forgebyteslab",
                  })}
                </p>
                <A
                  variant="outline"
                  size="sm"
                  href={t(`clients.projects.${clientId}.url`, {
                    ns: "forgebyteslab",
                  })}
                >
                  {t("clients.viewProject", { ns: "forgebytes" })}
                </A>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
