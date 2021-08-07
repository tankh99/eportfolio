export const SET_BACKGROUND_HEIGHT = "SET_BACKGROUND_HEIGHT"

export function setBackgroundHeight(height: string){
    return {
        type: SET_BACKGROUND_HEIGHT,
        payload: height
    }
}