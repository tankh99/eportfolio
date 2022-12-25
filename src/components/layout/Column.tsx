import React from 'react';

interface P {
    children: any
}

export default function Column(props: P){
    return(
        <div className='sm:col-span-24 md:col-span-12 lg:col-span-8'>
            {props.children}
        </div>
    )
}