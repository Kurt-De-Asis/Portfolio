import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Chatbot from "./components/Chatbot";

export const metadata = {
  title: "Kurt Russel De Asis | Software Engineer",
  description: "Professional portfolio of Kurt Russel De Asis - Software Engineer specializing in Go, Python, and modern web technologies.",
  keywords: "Kurt Russel De Asis, Software Engineer, Go Developer, Python Developer, Full Stack Developer, Portfolio",
  authors: [{ name: "Kurt Russel De Asis" }],
  creator: "Kurt Russel De Asis",
  publisher: "Kurt Russel De Asis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kurtdeasis.dev",
    title: "Kurt Russel De Asis | Software Engineer",
    description: "Professional portfolio of Kurt Russel De Asis - Software Engineer specializing in Go, Python, and modern web technologies.",
    siteName: "Kurt Russel De Asis Portfolio",
    images: [
      {
        url: "/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Kurt Russel De Asis Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurt Russel De Asis | Software Engineer",
    description: "Professional portfolio of Kurt Russel De Asis - Software Engineer specializing in Go, Python, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@kurtdeasis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
            <ScrollProgress />
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}