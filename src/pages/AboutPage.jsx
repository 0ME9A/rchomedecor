import React from 'react';
import About from '../components/About';
import Loading from '../components/Loading';


function AboutPage(props) {
    return (
        <>
        <Loading/>
        <div className='py-32'>
            <About/>
        </div>
        </>
    );
}

export default AboutPage;