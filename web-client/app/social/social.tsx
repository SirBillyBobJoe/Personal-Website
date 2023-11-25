import Link from "next/link";
import styles from "./social.module.css";

// Define an array of social media link objects
const socialLinks = [
    {
        href: "https://www.linkedin.com/in/hosea-tong-ho-47b468252/",
        imgSrc: "./linkedin.png",
        name: "LinkedIn"
    },
    {
        href: "https://github.com/SirBillyBobJoe",
        imgSrc: "./github.png",
        name: "Github"
    }
];

export default function Social() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Socials</h1>
            {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} target="_blank">
                    <div className={styles.socialLink}>
                        <img src={link.imgSrc} className={styles.img} />
                        {link.name}
                    </div>
                </Link>
            ))}
        </div>
    );
}
