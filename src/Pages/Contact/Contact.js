import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar.js'; // Assuming the Navbar component is in the same directory
import Footer from '../../Components/Footer/Footer.js'; // Assuming the Footer component is in the same directory

const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    function sendEmail(e) {
        e.preventDefault();

        const formData = {
            user_name: nameRef.current.value,
            user_email: emailRef.current.value,
            contact_number: numberRef.current.value,
            subject_of_email: subjectRef.current.value,
            message: messageRef.current.value,
        };

        emailjs.send('service_12mpvvg', 'template_jgx2evc', formData, 'Tl1iXpikVr-TQTxsE')
            .then((result) => {
                console.log(result.text);
                // Reset form fields after successful submission
                nameRef.current.value = '';
                emailRef.current.value = '';
                numberRef.current.value = '';
                subjectRef.current.value = '';
                messageRef.current.value = '';
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <h2 className="heading">Contact <span>Me</span></h2>

                <form onSubmit={sendEmail}>
                    
                    <div className="input-card">
                        <input type="text" ref={nameRef} placeholder="Enter Your Name" required />
                        <input type="email" ref={emailRef} placeholder="Enter Your Mail Id" required />
                    </div>

                    <div className="input-card">
                        <input type="number" ref={numberRef} placeholder="Enter Your Mobile Number" required />
                        <input type="text" ref={subjectRef} placeholder="Enter Subject Of The Mail" required />
                    </div>

                    <textarea ref={messageRef} cols="30" rows="10" placeholder="Enter Your Message Here..."></textarea>
                    
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
