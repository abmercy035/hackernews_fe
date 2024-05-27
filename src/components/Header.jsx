import Image from 'next/image'
import styles from "@/styles/header.module.css"

import hacker_news_logo from "../../public/y18.svg"
export default function Header() {
    return (
        <header className={styles.header_wrapper}>
            <div className={styles.header_logo_container}>
                <Image src={hacker_news_logo} />
                <h5>Hacker News</h5>
            </div>
            <div className={styles.header_nav_container}>
                <ul>
                    <li>new</li>|
                    <li>past</li>|
                    <li>comments</li>|
                    <li>ask</li>|
                    <li>show</li>|
                    <li>jobs</li>|
                    <li>submit</li>
                </ul>
            </div>
            <div className={styles.login_btn_container}>
                Login
            </div>
        </header>
    );
}
