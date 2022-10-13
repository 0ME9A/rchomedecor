import React, { useEffect, useState } from 'react';

function Loading(props) {
    const [loadingState, setLoadingState] = useState('flex')

    useEffect(()=>{
        setTimeout(() => {
            setLoadingState('none')
        }, 5000);
    },[])

    return (
        <div className='ani w-full h-full bg-dark gap-3 flex justify-center items-center fixed top-0 left-0 z-50' style={{display: `${loadingState}`}} >
            <span className='w-8 h-8 border-4 border-t-dark rounded-full animate-spin border-white'></span>
            <h1 className='text-2xl'>Loading...</h1>
        </div>
    );
}

export default Loading;