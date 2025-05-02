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
                <div className="flex h-24 items-center justify-start lg:h-36">
                  {" "}
                  {clientId === "client4" && (
                    <h3
                      className={`${t(`clients.projects.${clientId}.font`, { ns: "forgebytes" })} text-2xl text-white lg:text-5xl`}
                    >
                      {t(`clients.projects.${clientId}.name`, {
                        ns: "forgebytes",
                      })}
                    </h3>
                  )}
                  <img
                    src={t(`clients.projects.${clientId}.img`, {
                      ns: "forgebytes",
                    })}
                    alt={t(`clients.projects.${clientId}.name`, {
                      ns: "forgebytes",
                    })}
                    className={`object-cover ${clientId === "client4" ? "w-24 lg:w-28" : clientId === "client1" ? "w-42 lg:w-60" : "w-36 lg:w-54"}`}
                  />
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {t(`clients.projects.${clientId}.description`, {
                    ns: "forgebytes",
                  })}
                </p>
                <A
                  variant="outline"
                  size="sm"
                  href={t(`clients.projects.${clientId}.url`, {
                    ns: "forgebytes",
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
