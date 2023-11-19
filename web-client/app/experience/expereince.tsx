import styles from "./experience.module.css"
export default function Experience() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Experience</h1>

            <div className={styles.experience}>
                <h3>
                    <img src="risos.png" width="100" height="100" />
                    Software Engineering Intern at RisosEnterprises Ltd.
                </h3>
                <p>
                    Worked on research and development on a microscope camera that
                    can detect microbes in water onsite rather than sending it to a lab and waiting weeks
                    for a result. My job was to create an app that could be connected to a microscope
                    that could display a live feed of the microscope.
                </p>
            </div>

            <div className={styles.experience}>
                <h3>
                    <img src="nzpmc.png" width="100" height="100" />
                    Full Stack Developer Intern at NZPMC
                </h3>
                <p>
                    Tasked with creating a registration platform for NZPMC participants when they want to sign up to competitions.
                </p>
            </div>

            <div className={styles.experience}>
                <h3>
                    <img src="imc.png" width="100" height="100" />
                    IMC Launchpad Programme Candidate
                </h3>
                <p>An exclusive two-day programme offering an insight into the world of tech, trading and IMC. Included: Trading
                    Workshop, Tech Workshop (Python and PANDAS), Mock Exchange Migration, Hardware Programming (SV FPGA), Quant Research,
                    Trading Simulation (Trading bot and strategy)
                </p>
            </div>
        </div>
    )
}