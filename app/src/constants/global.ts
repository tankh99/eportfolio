
export function isMobileDevice(){
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

export function loadImage(src: string): any{
    // console.log(src)

    // import(`../assets/images/${src}`).then((image) => {
    //     return image.default;
    // }).catch((err) => {
    //     console.error(err)
    //     return err;
    // })

    
    return new Promise((resolve, reject) => {
        console.log(`../assets/images/${src}`)
        import(`../assets/images/${src}`).then((image) => {
            return resolve(image.default);
        }).catch((err) => {
            console.error(err)
            return reject(err);
        })
    })
}