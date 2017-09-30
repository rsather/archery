import React from 'react'
import { Router, Route, matchPath } from 'react-router-dom'
import MainScreen from './components/main-screen';
import UserAddScreen from './components/user-add';
import createHashHistory from 'history/createHashHistory';

export const INDEX_PATH = "/";
export const USER_PATH = "/user";
export const USER_ADD_PATH = USER_PATH + "/add";

export const history = createHashHistory();

export function isActive(pathname, pathToMatch) {
    return matchPath(pathname, pathToMatch) !== null;
}

const routes = () => (
    <Router history={history}>
        <div>
            <Route path={INDEX_PATH} component={MainScreen}/>
        </div>
    </Router>
);

export default routes;