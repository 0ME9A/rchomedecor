import React from 'react';

function CardViewer(props) {
    return (
        <div className="fixed top-0 left-0 overflow-auto p-5 grid items-center py-10 bg-primary inset-0 z-50" style={{transform: `scale(${props.scale===1?props.scale:0})`, opacity: `${props.scale===1?props.scale:0}` }}>
            <div className="card-container w-full mx-auto h-auto sm:w-2/3 lg:w-1/2 flex flex-col lg:flex-col-reverse gap-5">
                <div className={"card !w-full hover:shadow-2xl bg-light rounded-2xl overflow-hidden transition duration-300 ease-out hover:ease-in relative "}>
                    <img src={props.img} alt={props.img} className="relative w-full" />
                    <div className="card-text p-5">
                        <h3 className="text-xl text-darks">{props.title}</h3>
                        <p className="text-darks opacity-60">{props.desc}</p>
                    </div>
                </div>
                <button className='w-full bg-darks p-3 rounded-xl lg:w-fit lg:absolute right-5 top-5' onClick={() => props.close(0)}>Close</button>
            </div>
        </div>
    );
}

export default CardViewer;