"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/app/utils/theme";
import { StoreProvider } from "./store/provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>
          <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </PersistGate>
        </StoreProvider>
      </body>
    </html>
  );
}
