import projects from '../../constants/projects';
import { SET_ACTIVE_INDEX } from '../actions/projectActions';

const initialState = {
    projects: Object.values(projects),
    activeIndex: -1
}

export default (state = initialState, action: any) => {
    switch(action.type){
        case SET_ACTIVE_INDEX:
            return {
                ...state,
                activeIndex: action.payload
            }
        default: 
            return state;
    }
}