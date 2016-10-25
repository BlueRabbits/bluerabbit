import actionTypes from '../actions/actionTypes';
const initialState = {
    posts: []
};

export default function headerGet(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_NAVIGATION_MENU_SUCCESS: {
            return Object.assign({}, state, {
                posts: action.payload
            });
        }

        default: {
            return state;
        }
    }
}
