import React, { useMemo, useState } from 'react';
import testimonialData from '../assets/json/testimonial.json'

function Testimonial(props) {
    let [testimonial, setTestimonial] = useState(1)


    // function leftTestimonial(params) {
    //     testimonial < 1 ? setTestimonial(5) : setTestimonial(testimonial--) 
    // }
    // function rightTestimonial(params) {
    //     testimonial > 5 ? setTestimonial(1) : setTestimonial(testimonial++) 
    // }

    const ratingStystem = (rating) => {
        return [...Array(rating)].map((item) => {
            return (<i key={Math.random(5)} className="fa-solid fa-star" style={{color:'goldenrod'}}></i>)
        })
    }


    const memoTestimonial = useMemo(() => {
        const fullRating = Math.floor(testimonialData[testimonial].rating)
        const rating = testimonialData[testimonial].rating
        return (
            <>
                <img src={testimonialData[testimonial]['image']} alt="testimonial" className='w-28 border-primary aspect-square rounded-full border-4' />
                <div className="rating text-xl py-2">
                    {ratingStystem(fullRating)}
                    {rating>fullRating?<i className="fa-solid fa-star-half-stroke" style={{color:'goldenrod'}}></i>:null}
                </div>
                <h2 className='text-2xl pt-2 text-primary'>{testimonialData[testimonial]['title']}</h2>
                <blockquote className='text-center font-light text-lg opacity-70 text-darks italic'><i className="fa-solid fa-quote-left text-3xl px-3 text-darks"></i>{testimonialData[testimonial]['text']}<i className="fa-solid fa-quote-right text-3xl px-3 text-darks"></i></blockquote>
            </>
        )
    }, [testimonial])

    useMemo(()=>{
        const interval = setInterval(() => {

            if (testimonial>=5) {
                setTestimonial(1)
            }
            else{
                setTestimonial(testimonial+1)
            }
            return clearInterval(interval)
        }, 10000);

    },[testimonial])
    

    return (
        <section className='w-full max-w-screen-2xl items-center mx-auto justify-center flex gap-5 sm:gap-10 p-5 py-16 sm:py-20'>
            <div
                className="testimonial-container flex flex-col justify-center items-center max-w-sm sm:max-w-2xl aspect-square relative">
                {memoTestimonial}
            </div>
            {/* <div className="btns-group p-5 max-w-screen-2xl w-full flex justify-between absolute z-10">
                <button title="left" type="button" role="switch" className="bg-darks p-2" id="left" aria-checked="true" onClick={leftTestimonial}>
                    <i className="fa-solid fa-caret-left"></i>
                </button>
                <button title="right" type="button" role="switch" className="bg-darks p-2" id="right" aria-checked="true" onClick={rightTestimonial}>
                    <i className="fa-solid fa-caret-right"></i>
                </button>
            </div> */}
        </section>
    );
}

export default Testimonial;