import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLAGE Licita | Gestão de Licitações Públicas",
  description:
    "Gestão estratégica de licitações, análise de editais, propostas, habilitação e acompanhamento de pregões eletrônicos.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
