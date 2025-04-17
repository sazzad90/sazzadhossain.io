import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SectionThemeProvider } from "@/components/section-theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "Fullstack Software Engineer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* This script forces light theme on initial load before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                localStorage.setItem('theme', 'light');
              })()
            `,
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false} // Disable system preference
          disableTransitionOnChange
        >
          <SectionThemeProvider>{children}</SectionThemeProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
