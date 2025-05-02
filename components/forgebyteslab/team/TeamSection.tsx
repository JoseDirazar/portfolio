import { t } from "i18next";
import DevCard from "./DevCard";

export default function Team() {
  const devs = ["dev1"];
  return (
    <div id="team" className="w-full">
      <div className="flex w-full justify-around">
        {devs.map((dev) => (
          <DevCard
            key={t(`team.devs.${dev}.name`, { ns: "forgebyteslab" })}
            name={t(`team.devs.${dev}.name`, { ns: "forgebyteslab" })}
            avatar={t(`team.devs.${dev}.avatar`, { ns: "forgebyteslab" })}
            description={t(`team.devs.${dev}.description`, {
              ns: "forgebyteslab",
            })}
            href={t(`team.devs.${dev}.href`, { ns: "forgebyteslab" })}
            role={t(`team.devs.${dev}.role`, { ns: "forgebyteslab" })}
          />
        ))}
      </div>
    </div>
  );
}
