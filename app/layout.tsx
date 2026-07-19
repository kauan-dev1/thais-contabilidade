import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contabilidade Thaís | Contadora para pequenas empresas",
  description:
    "Serviços contábeis para MEI, autônomos, prestadores e pequenas empresas: impostos, folha, abertura, declarações e planejamento tributário.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Contabilidade Thaís",
    description:
      "Contabilidade clara, regular e consultiva para pequenos negócios.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
