import { css, StyleSheet } from 'aphrodite';
import React from 'react';

interface P {
    onClick: any,
    children: any
}

export default function RaisedButton(props: P){
    return (
        <button className={css(styles.button)}>
            {}
        </button>
    )
}

const styles = StyleSheet.create({
    button: {
        border: "3px solid #ccc"
    }
})