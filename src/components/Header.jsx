import React from 'react';
import { Link } from 'react-router-dom';
import bg_02 from "../assets/img/common/background-02.jpg"
import bg_03 from "../assets/img/common/background-03.png"

function Header(props) {
    return (
        <header className="header w-full bg-dark relative top-0 flex items-end">
            <figure className="banner bg-darks absolute top-0 left-0 h-full w-full overflow-hidden">
                <img src={bg_02} alt="background-img-1" className="opacity-60 border-b-8 border-primary w-full h-full object-cover" />
            </figure>
            <img src={bg_03} alt="background-img-2" className="chair top-16 w-full h-full object-cover absolute" />
            <div className="intro relative max-w-screen-2xl w-full mx-auto p-5 flex flex-col gap-4 md:gap-8">
                <h1 className="title-text font-extrabold md:text-8xl sm:text-6xl text-5xl">Bringing <br /><span className="animate-pulse title-text text-shadow">interior</span> to life</h1>
                <p className="text-xl sm:text-2xl font-light max-w-lg">Understand the person or people living in a
                    home is a far greater need in design.</p>
                    <Link to={'/contact'} target="_top" className="group px-4 w-fit py-2 text-xl sm:px-8 sm:py-4 sm:text-2xl bg-primary rounded-xl shadow-lg hover:shadow-2xl transition-all">Get a quote
                    <i className="fa-solid fa-angle-right pl-2 w-5 text-white group-hover:pl-3 transition-all "></i></Link>
                <div className="h-20"></div>
            </div>

        </header>
    );
}

export default Header;