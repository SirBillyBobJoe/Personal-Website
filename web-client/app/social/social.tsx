import Link from "next/link"
import styles from "./social.module.css"
export default function Social() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Socials</h1>
            <Link href="https://www.linkedin.com/in/hosea-tong-ho-47b468252/" target="_blank">
                <div className={styles.socialLink}>
                    <img src="./linkedin.png" height="70px width=70px" className={styles.img} />
                    LinkedIn
                </div>
            </Link>
            <Link href="https://github.com/SirBillyBobJoe" target="_blank">
                <div className={styles.socialLink}>
                    <img src="./github.png" height="70px width=70px" className={styles.img} />
                    Github
                </div>
            </Link>
        </div>
    )
}