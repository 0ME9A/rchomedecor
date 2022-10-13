import React from 'react';

function Card(props) {
    return (
        <div className={"card hover:scale-110 hover:shadow-2xl hover:z-10 bg-light rounded-2xl overflow-hidden transition duration-300 ease-out hover:ease-in relative "+props.css}>
            <img src={props.img} alt={props.img} className="relative w-full aspect-square object-cover" />
            <div className="card-text p-5">
                <h3 className="text-xl text-darks">{props.title}</h3>
                <p className="text-darks opacity-60">{props.desc}</p>
            </div>
        </div>
    );
}

export default Card;