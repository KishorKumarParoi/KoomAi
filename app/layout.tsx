import { ThemeProvider } from "@/components/theme";
import ReactQueryProvider from "@/react-query";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "KoomAi",
  description: "Share AI Powered Videos with your friends",
};

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className} bg-[#171717] antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
