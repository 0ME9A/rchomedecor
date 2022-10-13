import React from 'react';

function About(props) {
    return (
        <section id="about" className="w-full p-5 bg-light flex justify-center relative py-16">
        <div className="containers max-w-screen-2xl w-full flex flex-col gap-12 justify-center">
            <header>
                <span id="about-title2" className="style-text text-6xl text-center block text-primary">About us</span>
                <div className="about-us lg:flex gap-12 justify-center items-center my-5 lg:my-12">
                    <h2
                        className="title-text text-4xl pb-3 lg:pb-10 lg:text-6xl lg:w-1/2 xl:w-1/4 text-center lg:text-right w-full text-darks font-normal py-3">
                        Art & science of interior design</h2>
                    <p className="w-full text-2xl lg:w-1/3 font-light text-darks opacity-60 text-center lg:text-left">The
                        environments we live, work, and play in
                        are intergral to all our lives. Like the design of
                        product and services we provide.</p>
                </div>
                <p className="title-text text-shadow text-center lg:w-3/4 mx-auto text-2xl lg:text-3xl font-light text-dark">We, Rudra
                    Creative Home Decor Pvt Ltd situated at Anisabad, Patna, Bihar, operates in the fields of interior
                    designing with a talented team of designers. we have successfully conceptualized and completed the
                    interior designs of numerous residential, commercial projects as well as architectural projects. we
                    have completed some of the finest designs with the help of our renowned designers.</p>
            </header>
        </div>
    </section>
    );
}

export default About;