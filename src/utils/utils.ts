
export function getNameFromPath (path: any) {
    const arr = path.split("/")
    return arr[arr.length -1];
}

export function getSlug(path: string, breakpoint: string){
    // const arr = path.split("")
    const breakpointIndex = path.indexOf(breakpoint) + breakpoint.length ;

    const newPath = path.substring(breakpointIndex, path.length);
    return newPath
}