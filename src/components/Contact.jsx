/* eslint-disable no-useless-escape */
import React, { useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import emailjs from '@emailjs/browser';


function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const serviceId = 'service_so0dizh';
    const templateId = 'rchomedecor-id';
    const publicKey = '4-zPgFgrTvGCCOWt_';

    function validatePhone(inputtxt) {
        const regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return regexp.test(inputtxt);
    }
    function validateEmail(email) {
        // Regular Expression (Not accepts second @ symbol
        // before the @gmail.com and accepts everything else)
        const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // Converting the email to lowercase
        return regexp.test(String(email).toLowerCase());
    }
    function validateName(username) {
        const regexp = /^[a-z ]{3,15}$/;
        return regexp.test(String(username).toLowerCase());
    }




    const handleChange = (e, inputType) => {
        switch (inputType) {
            case 'phone':
                if (phone.length > 9 || isNaN(phone)) {
                    setPhone(phone.slice(0, phone.length - 1))
                } else {
                    setPhone(e.target.value)
                }
                break;
            case 'name':
                if (name.length > 14) {
                    setName(name.slice(0, name.length - 1))
                } else {
                    setName(e.target.value)
                }
                break;
            case 'message':
                if (message.length > 499) {
                    setMessage(message.slice(0, 499))

                } else {
                    setMessage(e.target.value)
                }
                break;
            default:
                break;
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validPhone = validatePhone(phone)
        const validEmail = validateEmail(email)
        const validName = validateName(name)
        let validMessage = false

        validPhone ? document.getElementById("phone").style.backgroundColor = 'rgba(255, 100, 100, 0)' : document.getElementById("phone").style.backgroundColor = 'rgb(255, 100, 100)'

        validEmail ? document.getElementById("email").style.backgroundColor = 'rgba(255, 100, 100, 0)' : document.getElementById("email").style.backgroundColor = 'rgb(255, 100, 100)'

        validName ? document.getElementById("name").style.backgroundColor = 'rgba(255, 100, 100, 0)' : document.getElementById("name").style.backgroundColor = 'rgb(255, 100, 100)'

        if (message.length > 500) {
            validMessage = false;
            setMessage(message.slice(0, 500));
        }
        else {
            validMessage = true;
        }


        const validForm = (validName && validEmail && validPhone && validMessage)
        if (validForm) {
            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
                .then((result) => {
                    alert("Success!")

                }, (error) => {
                    alert("Failed!")
                }
                );
        } else {
            alert("Incorrect data!")
        }

    }


    return (
        <section className='w-full bg-light grid gap-5 sm:gap-10 py-16 sm:py-20'>
            <div className="header-container p-5">
                <SectionHeader title="We love hearing from you" secondTitle="Contact" />
            </div>
            <div className="containers w-full flex flex-col justify-center gap-6 lg:gap-12">
                <div className="contact-container">
                    <div id="map-container"
                        className="map-container max-w-screen-2xl mx-auto w-full h-96 overflow-hidden bg-white relative z-10">
                        <iframe title="google-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7857241293646!2d85.11466575109668!3d25.578794722308704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a70b5229f9c9%3A0xbda80846a2c15413!2sRudra%20creative%20home%20decor%20%26%20architects%20pvt%20ltd!5e0!3m2!1shi!2sin!4v1664935510486!5m2!1shi!2sin"
                            className="w-full h-full border-0" allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="contact-container bg-dark p-5 py-28 h-auto w-full -mt-20">
                        <div className="contact-container-child m-auto max-w-screen-2xl w-full flex flex-col lg:flex-row justify-center gap-12">
                            <address id="contact-address" className="contact-info w-auto h-auto flex flex-col gap-3">
                                <div className="info-list">
                                    <h3 className="text-lg sm:text-xl text-darks"><i className="fa-solid fa-location-dot text-darks"></i> Head Office Address</h3>
                                    <p className="text-darks text-sm sm:text-lg px-6 opacity-60">Shiv Kali Niwas <br /> Near Celebration The Party Point,
                                        Saristabadh, <br /> Anisabad,
                                        Patna, Bihar 800002</p>

                                </div>
                                <div className="info-list">
                                    <h3 className="sm:text-xl text-lg text-darks"><i className="fa-solid fa-clock text-darks"></i>
                                        Our timing</h3>
                                    <p className="text-darks opacity-60 text-sm sm:text-lg px-6">Mon - Sun : 11:00 AM - 6:00 PM
                                    </p>
                                </div>
                                <div className="info-list">
                                    <h3 className="text-lg sm:text-xl text-darks"><i
                                        className="fa-solid fa-envelope text-darks"></i> Email address</h3>
                                    <a href="mailto:rudra@rchomedecor.com"
                                        className="text-sm sm:text-lg px-6 text-darks opacity-60 block">rudra@rchomedecor.com</a>
                                    <a href="mailto:rchomedecore@gmail.com"
                                        className="text-sm sm:text-lg px-6 text-darks opacity-60">rchomedecore@gmail.com</a>
                                </div>
                                <div className="info-list">
                                    <h3 className="text-xl sm:text-xl text-darks"><i className="fa-solid fa-phone text-darks"></i>
                                        Call us</h3>
                                    <a href="tel:+917903021397" className="text-darks opacity-60 text-sm sm:text-lg px-6">+91 7903021397</a>
                                </div>
                            </address>
                            <form id="contact-form" ref={form} className="contact-form w-full lg:w-1/2 h-auto flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
                                <div className="input-box w-full lg:max-w-xl">
                                    <label htmlFor="name"
                                        className="block text-darks text-sm sm:text-lg opacity-60 font-normal">Username</label>
                                    <input type="text" role="form" name="name" id="name" value={name} required
                                        className="p-2 sm:p-3 text-darks font-light text-sm sm:text-lg w-full bg-dark border-2 border-primary rounded-xl focus:bg-light" onChange={(e) => {
                                            handleChange(e, 'name');
                                        }} />
                                </div>
                                <div className="input-box w-full lg:max-w-xl">
                                    <label htmlFor="email"
                                        className="block text-darks text-sm sm:text-lg opacity-60 font-normal">Email</label>
                                    <input type="email" role="form" name="email" id="email" value={email} required className="p-2 sm:p-3 text-darks text-sm sm:text-lg w-full font-light bg-dark border-2 border-primary rounded-xl focus:bg-light" onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div className="input-box w-full lg:max-w-xl">
                                    <label htmlFor="phone"
                                        className="block text-darks text-sm sm:text-lg opacity-60 font-normal">Contact
                                        number</label>
                                    <input type="text" role="form" name="phone" id="phone" placeholder='+91' value={phone} required className="p-2 sm:p-3 text-darks text-sm sm:text-lg font-light w-full bg-dark border-2 border-primary rounded-xl focus:bg-light" onChange={(e) => {
                                        handleChange(e, 'phone');
                                    }} />
                                </div>
                                <div className="input-box w-full lg:max-w-xl">
                                    <label htmlFor="message"
                                        className="block text-darks text-sm sm:text-lg opacity-60 font-normal">Your
                                        message</label>
                                    <textarea type="text" rows="5" role="form" name="message" id="message" value={message}
                                        className="p-2 sm:p-3 text-darks font-light text-sm sm:text-lg w-full bg-dark border-2 border-primary rounded-xl focus:bg-light" onChange={(e) => {
                                            handleChange(e, 'message');
                                        }}></textarea>
                                    <span className='bg-light text-darks p-1 px-2 rounded-lg float-right'>{message.length}/500</span>
                                </div>
                                <div className="btn-group w-full text-right lg:max-w-xl text-white text-sm sm:text-lg bg-dark border-primary rounded-xl overflow-hidden">
                                    <button type="submit" value="submit" className="group px-4 w-full text-right py-2 text-xl sm:px-8 sm:py-4 sm:text-2xl bg-light rounded-xl shadow-lg hover:shadow-2xl transition-all">
                                        Send
                                        <i className="fa-solid fa-angle-right pl-2 w-5 text-white group-hover:pl-3 transition-all "></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Contact;