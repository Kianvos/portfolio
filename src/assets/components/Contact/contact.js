import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import Header from "../default/header";
import {FaEnvelope, FaUser} from "react-icons/fa";
import Swal from "sweetalert2";

import './contact.css';

const Projects = () => {
    const form = useRef();
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    const loader = document.getElementById("loader")

    const sendEmail = (e) => {
        e.preventDefault();
        loader.classList.add("loading-activate");
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(r => {
            Swal.fire({
                confirmButtonColor: 'gray',
                icon: "success",
                title: "Het bericht is verstuurd."
            })
            loader.classList.remove("loading-activate");

        }, (error) => {
            Swal.fire({
                confirmButtonColor: 'gray',
                icon: "error",
                title: 'Er is iets fout gegaan. Probeer opnieuw.',
                text: error.text
            })
            loader.classList.remove("loading-activate");

        })
    }

    return (
        <div>
            <div id={"loader"}>
                <div id={"spinner"}/>
            </div>
            <Header isFullPageScrolled={true}/>

            <div id={"contact"}>
                <form className={"contact-form"} ref={form} onSubmit={sendEmail}>
                    <label className={"contact-label"}>Naam</label>
                    <div className="input-container">
                        <FaUser className={"icon-contact"}/>
                        <input className="input-field" type="text" placeholder="Naam" name="name" id="name" required/>
                    </div>
                    <label className={"contact-label"}>Email</label>
                    <div className="input-container">
                        <FaEnvelope className={"icon-contact"}/>
                        <input className="input-field" type="email" placeholder="Email" name="email" required/>
                    </div>
                    <label className={"contact-label"}>Bericht</label>
                    <textarea className={"textarea-field"} placeholder={"Bericht..."} name="message" required/>

                    <input type="submit" className={"contact-button"} value={"Verzenden"}/>
                </form>
            </div>
        </div>
    );
};

export default Projects;
