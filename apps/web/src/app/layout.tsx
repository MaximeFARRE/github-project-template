import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Learning App",
  description: "Prépare tes entretiens techniques en finance avec des micro-cartes et la répétition espacée.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
