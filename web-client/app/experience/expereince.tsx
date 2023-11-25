import Link from "next/link";
import styles from "./experience.module.css"

export default function Experience() {
    const experiences = [
        {
            logoSrc: "risos.png",
            title: "Software Engineering Intern at RisosEnterprises Ltd.",
            description: "Worked on research and development on a microscope camera that can detect microbes in water onsite rather than sending it to a lab and waiting weeks for a result. My job was to create an app that could be connected to a microscope that could display a live feed of the microscope.",
            link: "https://www.risosenterprises.com"
        },
        {
            logoSrc: "nzpmc.png",
            title: "Full Stack Developer Intern at NZPMC",
            description: "Tasked with creating a registration platform for NZPMC participants when they want to sign up to competitions.",
            link: "https://www.nzpmc.com"
        },
        {
            logoSrc: "imc.png",
            title: "IMC Launchpad Programme Candidate",
            description: "An exclusive two-day programme offering an insight into the world of tech, trading and IMC. Included: Trading Workshop, Tech Workshop (Python and PANDAS), Mock Exchange Migration, Hardware Programming (SV FPGA), Quant Research, Trading Simulation (Trading bot and strategy).",
            link: "https://www.imc.com"
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Experience</h1>
            {experiences.map((experience, index) => (
                <Link key={index} href={experience.link} className={styles.experience} target="_blank">
                    <h3>
                        <img src={experience.logoSrc} />
                        {experience.title}
                    </h3>
                    <p>
                        {experience.description}
                    </p>
                </Link>
            ))}
        </div>
    )
}
