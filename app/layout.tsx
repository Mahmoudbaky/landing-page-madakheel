import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { APP_NAME_AR, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import Footer from "@/components/footer";
import NavBar from "@/components/shared/header";
// import HeaderWrapper from "@/components/shared/header/header-wrapper";

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
      <body
        className={` ${cairo.className}  antialiased flex flex-col min-h-screen`}
      >
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
