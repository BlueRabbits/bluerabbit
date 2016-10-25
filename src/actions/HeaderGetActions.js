import { checkHttpStatus, parseJSON } from './utils';
import actionTypes from './actionTypes';

const REDDIT_URL = "http://ec2-54-71-185-145.us-west-2.compute.amazonaws.com:3000";

export default function fetchNavigationMenu() {
    return function(dispatch) {
        dispatch({ type: actionTypes.GET_REDDIT_POST });
        return fetch(`${REDDIT_URL}/api/navigationMenus`, {
            method: "GET"
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then((jsonResponse) => {
            dispatch({
                type: actionTypes.GET_NAVIGATION_MENU_SUCCESS,
                payload: jsonResponse
            });
            
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.GET_NAVIGATION_MENU_FAILED,
                error: error.message
            });
        })
    }
}
