export const slideInAnimation = {
    
    container: {
        hidden: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
                staggerChildren: 0.2,
            }
        },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2,
            }
        }
    },
    item: {
        hidden: {
            x: -100, 
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }
}

export const slideUpAnimation = {
      
    container: {
        hidden: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
                staggerChildren: 0.2,
            }
        },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2,
            }
        }
    },
    item: {
        hidden: {
            y: 100, 
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }
}

export const hoverScaleAnimation = {
    img: {
        tap: {
            scale: 1.2
        },
        hover: {
            scale: 1.2
        }
    }
}

export const fadeInAnimation = {
    item: {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }
}