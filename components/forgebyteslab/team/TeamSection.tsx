import DevCard from "./DevCard";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();
  const devs = ["dev1"];
  return (
    <div id="team" className="w-full">
      <div className="flex w-full justify-around">
        {devs.map((dev, index) => (
          <DevCard
            key={`dev-${index}`}
            name={t(`team.devs.${dev}.name`, { ns: "forgebytes" })}
            avatar={t(`team.devs.${dev}.avatar`, { ns: "forgebytes" })}
            description={t(`team.devs.${dev}.description`, {
              ns: "forgebytes",
            })}
            href={t(`team.devs.${dev}.href`, { ns: "forgebytes" })}
            role={t(`team.devs.${dev}.role`, { ns: "forgebytes" })}
          />
        ))}
      </div>
    </div>
  );
}
