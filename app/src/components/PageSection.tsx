import React from 'react';
import {StyleSheet, css} from 'aphrodite-jss'

interface P {
    padded?: boolean,
    fitScreen?: boolean,
    customStyles?: any,
    children: any
}

export default function PageSection(props: P) {
    const {customStyles, fitScreen, padded, children} = props
    return (
        <div className={css(fitScreen ? styles.fitScreen : null, padded ? styles.padded : null, customStyles)}>
            {children}
        </div>
    )
}

const styles = StyleSheet.create({
    fitScreen: {
        minHeight: "100vh"
    },
    padded: {
        padding: "15px 140px",
    }
})