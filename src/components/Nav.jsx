import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const [searchState, setSearchState] = useState(0)
    const [menuState, setMenuState] = useState(0)
    const [searchVal, setSearchVal] = useState('')
    const [navColor, setNavColor] = useState('')
    const [menuIcon, setMenuIcon] = useState('fa-bars')

    const searchHandler = (e) => {
        e.preventDefault();
    }
    window.onscroll = function (e) {
        if (window.scrollY > 0) {
            setNavColor('bg-dark')
        }
        else {
            setNavColor('')
        }
    }


    return (
        <nav className={"w-full fixed top-0 z-50 px-5 " + navColor}>
            <div
                className="nav-contents w-full m-auto py-7 md:py-8 flex justify-between items-center max-w-screen-2xl">
                <div className="brand font-normal text-xl sm:text-2xl">
                    RC home decore
                </div>
                <div className="nav-link flex justify-center items-center w-90 gap-5 sm:gap-8">
                    <ul className="hidden justify-center items-center gap-8 text-xl font-light lg:flex text-white">
                        <li><Link to="/" className="hover:text-primary">Home</Link></li>
                        <li><Link to={'/services'} target="_top" className="hover:text-primary">Services</Link></li>
                        <li><Link to={'/projects'} target="_top" className="hover:text-primary">Projects</Link></li>
                        <li><Link to={'/about'} target="_top" className="hover:text-primary">About</Link></li>
                        <li><Link to={'/contact'} target="_top" className="hover:text-primary">Contact us</Link></li>
                        <li><span className="seprator w-1 h-6 bg-white block"></span></li>
                    </ul>
                    <i id="search-icon" className="fa-solid fa-magnifying-glass text-lg cursor-pointer hover:text-darks" onClick={() => searchState === 0 ? setSearchState(1) : setSearchState(0)}></i>
                    <i id="menu-bars-icon" className={"fa-solid text-xl sm:text-2xl w-6 cursor-pointer text-center hover:text-darks "+menuIcon} onClick={() => {
                            menuState === 0 ? setMenuState(1) : setMenuState(0)
                            setNavColor("bg-dark")
                            menuIcon === 'fa-bars'?setMenuIcon("fa-xmark"):setMenuIcon("fa-bars");
                        }}></i>
                </div>
            </div>

            <div className="search-container absolute p-5 left-0 drop-shadow-2xl w-full origin-top transition-all" style={{transform: `scale(${searchState})`, opacity:`${searchState}`}}>
                <form action="/projects" className="flex justify-center w-full max-w-screen-lg mx-auto rounded-2xl overflow-hidden">
                    <input type="search" name="search" id="search" required title='search' placeholder='Search' className='w-full p-3 md:p-6 bg-light text-xl md:text-2xl rounded-tl-2xl rounded-bl-2xl' value={searchVal} onChange={(e) => { setSearchVal(e.target.value) }} />
                    <button type="submit" title="search button" value={"submit"}>
                        <i className="fa-solid fa-magnifying-glass p-3 md:p-6 text-xl md:text-2xl bg-primary"></i>
                    </button>
                </form>
            </div>

            <menu className="p-10 w-full h-screen bg-dark transition-all fixed origin-top left-0" style={{transform: `scaleY(${menuState})`, opacity:`${menuState}` }}>
                <div className="nav-link max-w-screen-2xl mx-auto flex flex-col w-90 gap-8">
                    <ul className="text-center flex flex-col text-xl sm:text-3xl items-start gap-3 sm:gap-8">
                        <li><Link to={'/'} className="hover:text-primary">Home</Link></li>
                        <li><Link to={'/services'} className="hover:text-primary">Services</Link></li>
                        <li><Link to={'/projects'} className="hover:text-primary">Projects</Link></li>
                        <li><Link to={'/about'} className="hover:text-primary">About</Link></li>
                        <li><Link to={'/contact'} className="hover:text-primary">Contact us</Link></li>
                        <li><span className="seprator w-20 h-1 bg-darks block"></span></li>
                    </ul>
                </div>
            </menu>
        </nav>

    );
}

export default Nav;