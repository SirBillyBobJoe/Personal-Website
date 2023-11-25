import styles from './page.module.css'

export default function Achievements() {
    const topInCourses = [
        "SOFTENG 281: Object-Oriented Programming",
        "ELECTENG 101: Electrical and Digital Systems",
        "CHEMMAT 121: Materials Science",
        "ENGGEN 131: Introduction to Engineering Computation and Software Development"
    ];

    const deansHonoursList = ["2022", "2023"];

    const cieExamResults = {
        "2020": ["AS Level Mathematics: A+", "AS Level Physics: A+"],
        "2021": ["A Level Mathematics: A+", "A Level Physics: A+", "AS Level English: A", "AS Level Chemistry: A"]
    };

    const mathCompetitions = {
        "University of Otago Maths Competition": ["2018 - Top 30", "2019 - Top 30", "2020 - Top 30"],
        "UNSW ICAS": ["2018 Maths - High Distinction", "2019 Maths - High Distinction"],
        "Mathex": ["2018 - 3rd Place", "2019 - 3rd Place"]
    };

    return (
        <div className={styles.largeContainer}>
            <div className={styles.container}>
                <p className={styles.p}>University Of Auckland GPA: 9.0</p>

                <p className={styles.p}>Top In Course:</p>
                <ul className={styles.ul}>
                    {topInCourses.map((course, index) => (
                        <li key={index} className={styles.li}>{course}</li>
                    ))}
                </ul>

                <p className={styles.p}>Dean's Honours List:</p>
                <ul className={styles.ul}>
                    {deansHonoursList.map((year, index) => (
                        <li key={index} className={styles.li}>{year}</li>
                    ))}
                </ul>

                <p className={styles.p}>CIE Exam Results:</p>
                <div>
                    {Object.entries(cieExamResults).map(([year, results], index) => (
                        <ul key={index} className={styles.ul}>{year}:
                            {results.map((result, resultIndex) => (
                                <li key={resultIndex} className={styles.li}>{result}</li>
                            ))}
                        </ul>
                    ))}
                </div>

                {Object.entries(mathCompetitions).map(([competition, results], index) => (
                    <div key={index}>
                        <p className={styles.p}>{competition}:</p>
                        <ul className={styles.ul}>
                            {results.map((result, resultIndex) => (
                                <li key={resultIndex} className={styles.li}>{result}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
