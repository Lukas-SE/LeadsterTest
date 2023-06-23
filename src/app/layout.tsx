import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Leadster",
  description: "teste criado com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={PlusJakartaSans.className}>
        <Navbar />
        <Banner />
        {children}
      </body>
    </html>
  );
}
