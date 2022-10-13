import React from 'react';
import Img from '../assets/img/common/background-01.png';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (

        <footer className="w-full relative -mt-32 md:-mt-44">
            <img src={Img} alt="footer-img" className="w-2/3 sm:w-1/2 h-auto " />
            <div id="footer-contents" className="containers w-full p-5 py-32 flex flex-col gap-12 justify-center bg-dark border-t-8 border-primary">
                <header className="flex flex-col md:flex-row justify-center py-12 pb-24 items-center gap-6 lg:gap-16">
                    <h3 id="footer-title" className="title-text text-5xl md:text-8xl normal-case animate-pulse text-shadow">Let's
                        work <span className="title-text block pl-32">together.</span></h3>
                    <Link to={'/contact'} target="_top" id="footer-title-2" className="group px-4 py-2 text-xl sm:px-8 sm:py-4 sm:text-2xl bg-primary rounded-xl shadow-lg hover:shadow-2xl transition-all">Contact
                    <i className="fa-solid fa-angle-right pl-2 w-5 text-white group-hover:pl-3 transition-all "></i></Link>
                </header>
                <div
                    className="footer-container text-center lg:text-left flex flex-col lg:flex-row gap-16 w-full mx-auto justify-center">
                    <div id="footer-contact" className="columns">
                        <ul className="text-xl font-light grid gap-5">
                            <li><strong className="text-3xl">Rc home decore</strong></li>
                            <li><a href="tel:+919876543210">+91 7903021397</a></li>
                            <li><a href="mailto:rudra@rchomedecor.com">rudra@rchomedecor.com</a></li>
                            <li><a href="mailto:rchomedecore@gmail.com">rchomedecore@gmail.com</a></li>
                            <li>
                                <address>Shiv Kali Niwas, <br /> Near Celebration The Party Point,
                                    Saristabadh, <br /> Anisabad,
                                        Patna, Bihar 800002</address>
                            </li>
                        </ul>
                    </div>
                    <div id="footer-sitemap" className="columns">
                        <ul className="text-xl font-light grid gap-5">
                            <li><strong>Site map</strong></li>
                            <li><Link to="https://rchomedecor.netlify.app/" target="_top">Home</Link></li>
                            <li><Link to="/services" target="_top">Services</Link></li>
                            <li><Link to="/projects" target="_top">Projects</Link></li>
                        </ul>
                    </div>
                    <div id="footer-company" className="columns">
                        <ul className="text-xl font-light grid gap-5">
                            <li><strong>Company</strong></li>
                            <li><Link to="/about" target="_top">About</Link></li>
                            <li><Link to="contact" target="_top">Contact us</Link></li>
                            <li><Link to="terms_conditions" target="_top">Terms & Conditions</Link>
                            </li>
                            <li><Link to="privacy_policy" target="_top">Privacy & Policy</Link></li>
                        </ul>
                    </div>
                    <div id="footer-form" className="columns order-first lg:order-last">
                        <ul className="text-xl font-light grid gap-5">
                            <li>
                                <blockquote cite='https://decorblueprint.com/interior-design-quotes/' className='max-w-lg shadow-2xl rounded-xl p-5'>
                                “Architecture is a visual art and the buildings speak for themselves.”
                                <cite className='block text-right'>
                                 – Julia Morgan
                                </cite>
                                </blockquote>
                            </li>
                            {/* <li><strong>Do you have projects? </strong></li> */}
                            {/* <li>Love your email and we will contact
                                you as soon as possible.</li> */}
                            {/* <li>
                                <form action="#" className="white flex w-auto justify-center lg:justify-start rounded-xl overflow-hidden">
                                    <input type="text" placeholder="Enter your email" required
                                        className="w-auto text-sm sm:text-xl outline-none p-3 sm:p-5 text-darks rounded-tl-xl rounded-bl-xl"/>
                                    <button type="submit"
                                        className="bg-primary p-3 sm:p-5 flex items-center font-normal text-sm sm:text-xl rounded-tr-xl rounded-br-xl">Get a
                                        quote <i className="fa-solid fa-angle-right px-2 text-white"></i></button>
                                </form>
                            </li> */}
                            <li>
                                <Link to="https://facebook.com" target="_blank" className="text-3xl p-2 "><i className="hover:text-primary fa-brands fa-facebook"></i><span className="hidden">.</span></Link>
                                <Link to={'https://instagram.com'} target="_blank" className="text-3xl p-2 "><i className="hover:text-primary fa-brands fa-instagram"></i><span className="hidden">.</span></Link>
                                <Link to={'https://twitter.com'} target="_blank" className="text-3xl p-2 "><i className="hover:text-primary fa-brands fa-twitter"></i><span className="hidden">.</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <span className="bg-dark text-center w-full h-full block p-3 text-darks">all &#169; owns by rchomedecor</span>
        </footer>


    );
}

export default Footer;