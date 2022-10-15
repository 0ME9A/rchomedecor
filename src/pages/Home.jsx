import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import services from '../assets/json/services.json'
import projects from '../assets/json/projects.json'
import offers from '../assets/json/offers.json';
import SectionHeader from '../components/SectionHeader';
import About from '../components/About';
import WrapedCard from '../components/WrapedCard';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Testimonial from '../components/Testimonial';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet';

function Home(props) {
    return (
        <>
            <Loading/>
            <Header />
            <Helmet>
                <title>Best interior designer in Patna | 3D Interior Designer | Home Decor Service – RC Home Decor</title>

            </Helmet>
            <section id='services' className='w-full bg-dark grid gap-5 sm:gap-10 p-5 py-16 sm:py-20 lg:pt-52 sm:pt-32'>
                <div className="cards-container max-w-screen-2xl mx-auto flex flex-wrap justify-center gap-5">
                    {
                        offers.map((item) => {
                            return (
                                <div className={"card rounded-2xl overflow-hidden transition duration-300 ease-out hover:ease-in relative flex flex-col  items-center"} key={Math.random(10000)}>
                                <img src={item.image} alt={item.image} className="relative w-24 aspect-square object-cover" />
                                <div className="card-text p-5 text-center">
                                    <h3 className="text-xl text-darks">{item.title}</h3>
                                    <p className="text-darks opacity-60">{item.text}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className='w-full bg-light grid gap-5 sm:gap-10 p-5 py-16 sm:py-20'>
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
                <SectionHeader secondTitle={'Projects'} title={'Our finished Projects '} />
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