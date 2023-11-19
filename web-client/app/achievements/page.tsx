import styles from './page.module.css'
export default function Achievements() {
    return (
        <div className={styles.container}>
            <p className={styles.p}>University Of Auckland GPA: 9.0</p>

            <p className={styles.p}>Top In Course:</p>

            <ul className={styles.ul}>
                <li className={styles.li}> SOFTENG 281: Object-Oriented Programming</li>
                <li className={styles.li}>ELECTENG 101: Electrical and Digital Systems</li>
                <li className={styles.li}> CHEMMAT 121: Materials Science</li>
                <li className={styles.li}>ENGGEN 131: Introduction to Engineering Computation and Software Development</li>
            </ul>

            <p className={styles.p}>Dean's Honours List:</p>
            <ul className={styles.ul}>
                <li className={styles.li}>2022</li>
                <li className={styles.li}>2023</li>
            </ul>

            <p className={styles.p}>CIE Exam Results:</p>
            <div>
                <ul className={styles.ul}>2020:
                    <ul className={styles.ul}>
                        <li className={styles.li}>AS Level Mathematics: A+</li>
                        <li className={styles.li}>AS Level Physics: A+</li>
                    </ul>
                </ul>
                <ul className={styles.ul}>2021:
                    <ul className={styles.ul}>
                        <li className={styles.li}>A Level Mathematics: A+</li>
                        <li className={styles.li}>A Level Physics: A+</li>
                        <li className={styles.li}>AS Level English: A</li>
                        <li className={styles.li}>AS Level Chemistry: A</li>
                    </ul>
                </ul>
            </div>

            <p className={styles.p}>University of Otago Maths Competition:</p>
            <ul className={styles.ul}>
                <li className={styles.li}>2018 - Top 30</li>
                <li className={styles.li}>2019 - Top 30</li>
                <li className={styles.li}>2020 - Top 30</li>
            </ul>

            <p className={styles.p}>UNSW ICAS:</p>
            <ul className={styles.ul}>
                <li className={styles.li}>2018 Maths - High Distinction</li>
                <li className={styles.li}>2019 Maths - High Distinction</li>

            </ul>

            <p className={styles.p}>Mathex:</p>
            <ul className={styles.ul}>
                <li className={styles.li}>2018 - 3rd Place</li>
                <li className={styles.li}>2019 - 3rd Place</li>
            </ul>

        </div>
    )
}