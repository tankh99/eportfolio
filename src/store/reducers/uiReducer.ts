import { SET_BACKGROUND_HEIGHT } from "store/actions/uiActions";

const initialState = {
    backgroundHeight: "100vh"
}

export default (state = initialState, action: any) => {
    switch(action.type){
        case SET_BACKGROUND_HEIGHT:
            return {
                ...state,
                backgroundHeight: action.payload
            }
        default:
            return state;
    }
}