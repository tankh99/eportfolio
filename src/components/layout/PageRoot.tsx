import React from 'react';

interface P {
    padded?: boolean,
    className?: any
    children: any
}

const PageRoot = (props: P) => {
    const {padded, className, children} = props
    return (
        <div className={`${padded ? 'fully-padded' : 'page'} ${className ? className : ''}`}>
            {props.children}
        </div>

    )
}

export default PageRoot;