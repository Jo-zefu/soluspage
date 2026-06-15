import type { Metadata } from "next";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'

export const metadata: Metadata = {
  title: "Sole Studio",
  description: "Sole Studio — custom product strategy and website development for ambitious brands.",
  icons: {
    icon: "/sole-favicon.svg",
    shortcut: "/sole-favicon.svg",
    apple: "/sole-favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages()
  
  return (
    <html lang={messages._locale} className="h-full antialiased">
      <body className="min-h-full flex ">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </body>
    </html>
  );
}
