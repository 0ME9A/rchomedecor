import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/img/common/notfoundimg.png'

function Error(props) {
    return (
        <div className='w-full min-h-screen flex justify-center items-center flex-col gap-5'>
            <img src={Img} alt={"not found"} />
            <h1 className='text-3xl'>Opps page not found!</h1>
            <Link to="/" className='px-7 border-4 text-xl  bg-light hover:bg-dark  border-dark py-2 rounded-xl'>Home</Link>
            
        </div>
    );
}

export default Error;