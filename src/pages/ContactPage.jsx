import React from 'react';
import Contact from '../components/Contact';
import Loading from '../components/Loading';

function ContactPage(props) {
    return (
        <>
        <Loading/>
        <div className='pt-8'>
            <Contact/>
        </div>
        </>
    );
}

export default ContactPage;