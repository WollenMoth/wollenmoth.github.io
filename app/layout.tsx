import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wollenmoth.github.io"),
  title: "André Díaz — Software Engineer",
  description:
    "André Díaz is a software engineer in Mexico building web interfaces, backend automation, and reliable delivery workflows.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "André Díaz — Software Engineer",
    description:
      "Useful software. Less busywork. Backend, automation, and reliable delivery.",
    url: "/",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = { themeColor: "#14271f" };

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
