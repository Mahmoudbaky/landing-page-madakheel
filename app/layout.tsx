import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { APP_NAME_AR, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import Footer from "@/components/footer";
import NavBar from "@/components/shared/header";

import "../assets/styles/globals.css";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | maddakhel`,
    default: APP_NAME_AR,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${cairo.className}  antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
