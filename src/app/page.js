import Image from "next/image";
import styles from "../styles/page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      Home page
    </main>
  );
}
