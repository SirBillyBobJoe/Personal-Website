import styles from "./aboutMe.module.css"
export default function AboutMe() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>About Me</h1>
            <div className={styles.body}>
                <div>
                    <h2>Hi there! </h2>
                    <p>
                        I'm Hosea, currently in my third year (Penultimate Year) in software engineering at the University of Auckland.
                        My path to programming has been an exciting and humbling journey which started from highschool and has been 
                        filled with learning curves that have fostered not only my knowledge but also my character. I've come to realize 
                        that the 'why' behind every concept, every line of code, is what truly fascinates me. It's this quest for underlying 
                        reasons that drives my learning process because when we grasp the 'why,' the 'what' naturally follows.
                        <br/><br/>
                        Beyond the world of algorithms and systems, I love to go out of my comfort zone and challenge myself. Whether 
                        going on hikes among New Zealands best tracks or playing tennis and football competitively, I believe in 
                        embracing all of the experiences life has to offer. These activities are not just hobbies; they're
                        core parts of who I am, keeping me inspired and always seaking for more.
                        <br/><br/>
                        As for the future, I'm excited to continue my journey in tech,  I'm eager to apply my skills in technology to projects
                        with a meaningful impact. I aspire to work on problems that not only challenge me professionally but also contribute
                        positively to society. My goal is to be part of solutions that matter, using my technical knowledge with a
                        purpose-driven mission to make a difference in the world.
                        <br/><br/>
                        I'm always up for a chat about the newest technologies, sharing insights, or just exchanging stories. Feel free to reach
                        out on LinkedIn or take a peek at my GitHub to see what I am currently working on.
                    </p>
                </div>
                <img className={styles.pfp} src="aboutMe.jpg" width="45%" height="60%" />
            </div>
        </div>
    )
}