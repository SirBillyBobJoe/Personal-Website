import Link from "next/link"
import styles from "./page.module.css"
export default function Project() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Projects</h1>
            <div className={styles.projectContainer}>

                <div className={styles.project}>
                    <Link href="https://github.com/SirBillyBobJoe/Qt5Camera" target="_blank">
                        <h3>Microscope Camera</h3>
                        <p>
                            This application serves as a powerful tool for capturing and manipulating images.
                            The user interface includes a variety of buttons and menu options that allow you
                            to adjust the camera's resolution, switch between different cameras, and display images.
                            In addition it has zoom capabilities where one tap zooms in the image, two taps zooms out
                            and dragging the screen while zoomed in will move the camera view.
                        </p>
                        <div className={styles.image}>
                            <img src="microscope1.png" width="90%" />
                            <img src="microscope2.png" width="90%" />
                        </div>
                    </Link>
                    <Link className={styles.report} href="/microscopeReport">
                        Read the report
                    </Link>
                </div>

                <div className={styles.project}>
                    <Link href="https://github.com/SirBillyBobJoe/The-Singularity-Escape-Room-Game" target="_blank">
                        <h3>The Singularity Escape Room Game</h3>
                        <p>
                        An immersive riddle escape room game where your challenge is to solve puzzles and riddles to 
                        escape from a virtual room. This game is uniquely powered by ChatGPT, acting as your guide and game 
                        master throughout the experience.
                        </p>
                        <div className={styles.image}>
                            <img src="singularity1.png" width="90%" />
                            <img src="singularity2.png" width="90%" />
                        </div>
                    </Link>
                    <Link className={styles.report} href="/escapeRoomReport">
                        Read the report
                    </Link>
                </div>

                <div className={styles.project}>
                    <Link href="https://github.com/SirBillyBobJoe/VideoStreamingPlatform" target="_blank">
                        <h3>Video Streaming Platform</h3>
                        <p>
                            A video streaming platform website that processes any videos you upload to 360p quality and stores it. 
                            You are then able to watch any videos that you upload. If you can't find you video on 
                            the homepage you can search for it. Only logged in users can upload videos.
                        </p>
                        <div className={styles.image}>
                            <img src="videoStream3.png" width="90%" />
                            <img src="videoStream1.png" width="90%" />
                            <img src="videoStream2.png" width="90%" />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}