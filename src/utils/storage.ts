export function sessionSet(key: any, value: any){
    sessionStorage.setItem(key, value)
    console.log("set item")
    console.log(value)
}

export function sessionGet(key: string): any{
    return sessionStorage.getItem(key)
}
