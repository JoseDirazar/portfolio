import { LanguageSwitcher } from "@/components/forgebyteslab/common/LanguageSwitcher";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jose Dirazar | Portfolio",
  description: "Jose Dirazar Portfolio",
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="fixed hidden rounded lg:top-2 lg:right-2 lg:block">
        <LanguageSwitcher />
      </div>
      <div className="fixed bottom-2 left-2 rounded bg-white drop-shadow-2xl lg:hidden dark:bg-primary">
        <LanguageSwitcher contentTop />
      </div>
      {children}
    </div>
  );
}
