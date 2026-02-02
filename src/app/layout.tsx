import "./globals.css";
import HeroProvider from "@/shared/providers/HeroProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeroProvider>
          {children}
        </HeroProvider>
      </body>
    </html>
  );
}
