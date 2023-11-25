'use client'
import Link from "next/link";
import styles from "./page.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const projects = [
    {
        href: "https://github.com/SirBillyBobJoe/Qt5Camera",
        title: "Microscope Camera",
        description: "This application serves as a powerful tool for capturing and manipulating images. The user interface includes a variety of buttons and menu options that allow you to adjust the camera's resolution, switch between different cameras, and display images. In addition it has zoom capabilities where one tap zooms in the image, two taps zooms out and dragging the screen while zoomed in will move the camera view.",
        images: ["/microscope1.png", "/microscope2.png"],
        reportLink: "/microscopeReport"
    },
    {
        href: "https://github.com/SirBillyBobJoe/The-Singularity-Escape-Room-Game",
        title: "The Singularity Escape Room Game",
        description: "An immersive riddle escape room game where your challenge is to solve puzzles and riddles to escape from a virtual room. This game is uniquely powered by ChatGPT, acting as your guide and game master throughout the experience.",
        images: ["/singularity.gif","/singularity1.png", "/singularity2.png"],
        reportLink: "/escapeRoomReport"
    },
    {
        href: "https://github.com/SirBillyBobJoe/VideoStreamingPlatform",
        title: "Video Streaming Platform",
        description: "A video streaming platform website that processes any videos you upload to 360p quality and stores it. You are then able to watch any videos that you upload. If you can't find you video on the homepage you can search for it. Only logged in users can upload videos.",
        images: ["/videoStream1.png", "/videoStream2.png", "/videoStream3.png"],
    }
];

interface ImageCarouselProps {
    images: string[];
}
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:3000,
        fade:true,
        pauseOnHover:true,
        centerMode:true,
        touchMove:true,
        draggable:true,
        swipeToSlide:true,
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings} className={styles.imageSlider}>
                {images.map((image, index) => (
                    <div key={index} className={styles.sliderDiv} >
                        <img src={image}key={index} alt={`Slide ${index}` }className={styles.img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default function Project() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Projects</h1>
            <div className={styles.projectContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.project}>
                        <Link href={project.href} target="_blank" className={styles.link}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className={styles.image}>
                                <ImageCarousel images={project.images} />
                            </div>
                        </Link>
                        {project.reportLink && <Link className={styles.report} href={project.reportLink}>
                            Read the report
                        </Link>}
                        <Link className={styles.report} href={project.href} target="_blank">
                            Go To GitHub
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
