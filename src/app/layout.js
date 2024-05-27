import { Inter } from "next/font/google";
import styles from "@/styles/layout.module.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.layout}>{children}</body>
    </html>
  );
}
