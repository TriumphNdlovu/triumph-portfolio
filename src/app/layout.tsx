import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Triumph Portfolio",
  description: "Take a journey through to the past and see the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />

      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
      rel="stylesheet"
       />


      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
