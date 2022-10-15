import React, { useState } from 'react';
import CardViewer from './CardViewer';

function WrapedCard(props) {
    const [previewState, setPreviewState] = useState(0)
    return (
        <>
            <div className="card hover:scale-110 hover:shadow-2xl hover:z-10 bg-light rounded-2xl overflow-hidden transition duration-300 ease-out hover:ease-in relative" onClick={() => {
                setPreviewState(1)
            }}>
                <img src={props.img} alt={props.img} className="relative w-full aspect-square object-cover" />
                <div className="card-text p-5 absolute bg-primary w-full h-full top-0 flex justify-center flex-col opacity-0 hover:opacity-100 transition-all">
                    <h3 className="text-xl text-darks">{props.title}</h3>
                    <p className="text-darks opacity-60">{props.desc}</p>
                </div>
            </div>
            <CardViewer scale={previewState} close={setPreviewState} img={props.img} title={props.title} desc={props.desc}/>
        </>
    );
}

export default WrapedCard;