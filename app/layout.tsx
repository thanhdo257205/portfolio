import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import AnimatedBackground from '@/components/AnimatedBackground';

export const metadata: Metadata = {
  title: "Đỗ Hoàn Thành | Java Developer Portfolio",
  description: "Portfolio của Đỗ Hoàn Thành - Java Developer & Student @ FPT University. Đam mê code, không ngừng học hỏi.",
  keywords: ["Java Developer", "Spring Boot", "Portfolio", "FPT University", "Backend Developer"],
  authors: [{ name: "Đỗ Hoàn Thành" }],
  openGraph: {
    title: "Đỗ Hoàn Thành | Java Developer Portfolio",
    description: "Portfolio của Đỗ Hoàn Thành - Java Developer & Student @ FPT University",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>DT</text></svg>" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AnimatedBackground />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
