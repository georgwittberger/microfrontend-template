import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

import { Importmap } from "~/components/importmap";
import "./globals.css";
import { Header } from "./header";

export const metadata: Metadata = {
  title: {
    template: "%s - Next.js Host Application",
    default: "Home - Next.js Host Application",
  },
  description: "Next.js based host application for microfrontends",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <Importmap />
      </head>
      <body className="container mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
