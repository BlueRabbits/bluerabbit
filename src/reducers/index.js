import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import redditPost from './redditPost';
import headerGet from './headerGet';

export default combineReducers({
    redditPost,
    headerGet,
    routing: routerReducer
});
