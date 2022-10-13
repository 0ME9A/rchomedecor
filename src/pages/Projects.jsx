import React from 'react';
import SectionHeader from '../components/SectionHeader';
import WrapedCard from '../components/WrapedCard';
import ProjectsList from '../assets/json/projects.json'
import Loading from '../components/Loading';

function Projects(props) {

    return (
        <>
            <Loading/>
            <section className='w-full grid gap-5 sm:gap-10 p-5 py-16 sm:py-20 sm:pt-32 '>
                <SectionHeader secondTitle={'Projects'} title={'Our completed Projects '} />
                <div className="cards-container w-full max-w-screen-2xl mx-auto flex flex-wrap justify-center gap-5">
                    {
                        window.location.search === '' || window.location.search.split('=')[1] === '' ? ProjectsList.map((item) => {
                            return (
                                <WrapedCard key={item.id} title={item.title} desc={item.text} img={item.image} />
                            )
                        }) :
                            ProjectsList.map((item) => {
                                if (item['tags'].includes(window.location.search.split('=')[1])) {
                                    return (
                                        <WrapedCard key={item.id} title={item.title} desc={item.text} img={item.image} />
                                    )
                                }
                            })
                    }
                </div>
            </section>
        </>
    )

}

export default Projects;