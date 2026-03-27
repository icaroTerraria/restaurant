import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";


export const poppins = Poppins({
  variable: "--font-poppins", 
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className={`${poppins.variable} ${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
