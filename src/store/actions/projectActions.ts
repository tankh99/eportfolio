export const SET_ACTIVE_INDEX = "SET_ACTIVE_INDEX" 

export function setActiveIndexAction(index: number){
    return {
        type: SET_ACTIVE_INDEX,
        payload: index
    }
}