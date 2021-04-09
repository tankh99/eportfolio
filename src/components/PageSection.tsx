import React from 'react';
import {StyleSheet, css} from 'aphrodite-jss'

interface P {
    padded?: boolean,
    header?: string,
    fitScreen?: boolean,
    centered? : boolean,
    lastSection?: boolean,
    paragraph?: boolean,
    customStyles?: any,
    children: any
}

export default function PageSection(props: P) {
    const {customStyles, fitScreen,header, padded, centered, paragraph, children} = props
    return (
        <div className={css(styles.section, 
            centered ? styles.centered : null, 
            fitScreen ? styles.fitScreen : null, 
            padded ? styles.padded : null, 
            paragraph ? styles.paragraph : null,
            customStyles ? customStyles : null)}>
            {header && 
                <div className={`section-header`}>{header}</div>
            }
            {children}
        </div>
    )
}

const styles = StyleSheet.create({
    section: {
        // padding: "0 0 0 40px"
    },
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    fitScreen: {
        minHeight: "100vh"
    },
    lastSection: {
        paddingBottom: "90px",
    },
    padded: {
        padding: "15px 40px",
    },
    paragraph: {
        maxWidth: "75%",
        margin: "auto",
        "@media (max-width: 767px)": {
            maxWidth: "100%"
        }
    }
})