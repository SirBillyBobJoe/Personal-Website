'use client';

import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import styles from "./page.module.css";


export default function Upload() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');

    const [description, setDescription] = useState<string>('');

    const handleChangeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(subject)
        setSubject(event.target.value)
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(email)
        setEmail(event.target.value)
    }

    const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(firstName)
        setFirstName(event.target.value)
    }

    const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(lastName)
        setLastName(event.target.value)
    }

    const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(description)
        setDescription(event.target.value)
    }





    return (
        <div className={styles.sendContainer}>
            <ToastContainer />

            <>
                <h1 className={styles.h1}>Contact Me</h1>
                <form className={styles.sendForm} action="https://formsubmit.co/debd543224ef854036525b38b090bf79" method="POST">
                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                    <input id="firstName" onChange={handleChangeFirstName} type='text' value={firstName} className={styles.input} name="First Name" required />

                    <label htmlFor="lastName" className={styles.label}>Last Name</label>
                    <input id="lastName" onChange={handleChangeLastName} type='text' value={lastName} className={styles.input} name="Last Name"required/>

                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input id="email" onChange={handleChangeEmail} type='email' value={email} className={styles.input} name="Email"required/>

                    <label htmlFor="subject" className={styles.label}>Subject</label>
                    <input id="subject" onChange={handleChangeSubject} type='text' value={subject} className={styles.input} name="Subject"required/>

                    <label htmlFor="Description" className={styles.label}>Description</label>
                    <textarea onChange={handleChangeDescription} id="Description"  value={description} name="Description"className={styles.textarea} required></textarea>

                    <button type='submit' className={styles.button}>Send</button>
                </form>
            </>

        </div>
    );
}