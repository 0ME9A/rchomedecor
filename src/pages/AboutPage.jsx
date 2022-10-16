import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/About';
import Loading from '../components/Loading';


function AboutPage(props) {
    return (
        <>
        <Loading/>
        <Helmet>
            <title>Rc home decor || About</title>
        </Helmet>
        <main className='py-32'>
            <About/>
        </main>
        </>
    );
}

export default AboutPage;