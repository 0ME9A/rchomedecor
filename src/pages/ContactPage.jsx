import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/Contact';
import Loading from '../components/Loading';

function ContactPage(props) {
    return (
        <>
        <Loading/>
        <Helmet>
            <title>Rc home decor || Contact || Form</title>
        </Helmet>
        <main className='pt-8'>
            <Contact/>
        </main>
        </>
    );
}

export default ContactPage;