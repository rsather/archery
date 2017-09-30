import {combineReducers} from 'redux';
import main from './main';
import user from './user';

const rootReducer = combineReducers({
    main,
    user
});

export default rootReducer;