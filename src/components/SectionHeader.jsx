import React from 'react';

function SectionHeader(props) {
    return (
        <header className='w-full max-w-screen-2xl mx-auto'>
            <span id="service-title-2" className="second-title text-lg uppercase text-primary">{props.secondTitle}</span>
            <h2 id="service-title" className="title-text text-3xl md:text-5xl text-darks font-normal py-3">{props.title}</h2>
        </header>
    );
}

export default SectionHeader;