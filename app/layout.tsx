import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="vi">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕</text></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
