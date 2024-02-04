import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "NFT Hub",
  description: "A advance ntf landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary">{children}</body>
    </html>
  );
}
