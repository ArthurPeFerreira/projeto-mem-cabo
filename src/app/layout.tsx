import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Calculadora de Fio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="h-screen w-screen bg-gray-900"
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
