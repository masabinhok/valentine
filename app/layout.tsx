import type { Metadata } from "next";
import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const pacifico = Pacifico(
  {
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-pacifico',
  }
)

export const metadata: Metadata = {
  title: "Will you be my valentine?",
  description: "Please say yes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${pacifico.variable}  font-poppins antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
