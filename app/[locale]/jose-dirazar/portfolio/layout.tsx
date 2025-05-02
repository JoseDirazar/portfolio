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
  return <div>{children}</div>;
}
