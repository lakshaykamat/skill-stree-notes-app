"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "./redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Skill Street Notes application</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <StoreProvider>
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="w-full p-6 mx-auto">{children}</main>
              <Toaster />
            </div>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
