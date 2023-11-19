'use client'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from './page.module.css'
export default function Resume() {
    return (
        <div className={styles.pdfContainer}>
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
                <Viewer fileUrl="resume.pdf" />
            </Worker>

        </div>
    )
}