import React, { useEffect, useState } from 'react';

export const Delay = ({children, delay}: any) => {
    const [done, setDone] = useState(false);
    console.log(delay);
    useEffect(() => {
        const showTimer = setTimeout(() => setDone(true), delay)
        return () => clearTimeout(showTimer)
    }, [])

    return done ? <>{children}</> : null
}
