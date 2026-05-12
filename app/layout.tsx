import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sole Studio",
  description: "Sole Studio — custom product strategy and website development for ambitious brands.",
  icons: {
    icon: "/sole-favicon.svg",
    shortcut: "/sole-favicon.svg",
    apple: "/sole-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex ">{children}</body>
    </html>
  );
}
