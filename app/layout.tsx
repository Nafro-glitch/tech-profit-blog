import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "مدونة التكنولوجيا والربح | موقع احترافي للمعرفة والدخل",
  description: "مدونة متخصصة في مجال التكنولوجيا والذكاء الاصطناعي وطرق الربح من الإنترنت، نقدم محتوى عربي قيم ومفيد",
  keywords: "تكنولوجيا، ذكاء اصطناعي، ربح من الإنترنت، مدونة عربية، تقنية",
  authors: [{ name: "فريق المدونة" }],
  creator: "فريق المدونة",
  publisher: "مدونة التكنولوجيا والربح",
  openGraph: {
    title: "مدونة التكنولوجيا والربح | موقع احترافي للمعرفة والدخل",
    description: "مدونة متخصصة في مجال التكنولوجيا والذكاء الاصطناعي وطرق الربح من الإنترنت، نقدم محتوى عربي قيم ومفيد",
    url: "https://tech-profit-blog.com",
    siteName: "مدونة التكنولوجيا والربح",
    locale: "ar_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
