import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Divider } from "@nextui-org/react";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/home/footer";
import ProvidersWrapper from "@/components/providers/providersWrapper";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mind Tracer",
  description:
    "Mind Tracer es una aplicación web que te ayuda a rastrear tus pensamientos y emociones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const className = "dark";
  return (
    <html lang="es" className={`${className}`}>
      <body
        className={`${inter.className} min-h-screen min-w-screen overflow-x-hidden`}
      >
        <ProvidersWrapper>
          <NavBar />
          <Divider />
          {children}
          <Divider />
          <Footer />
        </ProvidersWrapper>
      </body>
    </html>
  );
}
