import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Triumph Portfolio",
  description: "Take a journey through to the past and see the future",
  keywords: ["Portfolio", "Triumph", "Vercel"],
  
}

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
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
       />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
