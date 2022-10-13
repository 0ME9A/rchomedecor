import React from 'react';
import SectionHeader from '../components/SectionHeader';
import services from '../assets/json/services.json'
import Card from '../components/Card';
import Loading from '../components/Loading';


function ServicesPage(props) {
    return (
        <>
            <Loading />
            <section id='services' className='w-full bg-light grid gap-5 sm:gap-10 p-5 py-32 lg:pt-52'>
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
        </>
    );
}

export default ServicesPage;