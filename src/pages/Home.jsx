import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import services from '../assets/json/services.json'
import projects from '../assets/json/projects.json'
import SectionHeader from '../components/SectionHeader';
import About from '../components/About';
import WrapedCard from '../components/WrapedCard';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Testimonial from '../components/Testimonial';
import Loading from '../components/Loading';

function Home(props) {
    return (
        <>
            <Loading/>
            <Header />
            <section id='services' className='w-full bg-light grid gap-5 sm:gap-10 p-5 py-16 sm:py-20 lg:pt-52 sm:pt-32'>
                <SectionHeader secondTitle={'Services'} title={'We provide top services in Bihar'} />
                <div className="cards-container max-w-screen-2xl mx-auto flex flex-wrap justify-center gap-5">
                    {
                        services.map((item) => {
                            return (
                                <Card key={item.id} title={item.title} desc={item.text} img={item.image} />
                            )

                        })
                    }
                </div>
            </section>
            <About />
            <section className='w-full bg-light grid gap-5 sm:gap-10 p-5 py-16 sm:py-20'>
                <SectionHeader secondTitle={'Projects'} title={'Our completed Projects '} />
                <div className="cards-container max-w-screen-2xl mx-auto flex flex-wrap justify-center gap-5">
                    {
                        projects.map((item) => {
                            if (item.id < 9) {
                                return (
                                    <WrapedCard key={item.id} title={item.title} desc={item.text} img={item.image} />
                                )
                            }
                        })
                    }
                </div>
                <Link to="/projects" target={'_top'} className="text-darks md:text-xl underline text-center">See more designs</Link>
            </section>
            <Testimonial/>

            <Contact/>


        </>
    );
}

export default Home;