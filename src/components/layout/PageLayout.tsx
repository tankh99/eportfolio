import React from 'react';

interface P {
    className?: any
    children: any
}

const PageRoot = (props: P) => {
    const {className, children} = props
    return (
        <div className={`page ${className}`}>
            {props.children}
        </div>

    )
}

export default PageRoot;