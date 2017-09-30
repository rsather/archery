import React from 'react';
import styles from './main-screen.css';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import {
    USER_ADD_PATH
} from '../../routes';
import Navigation from '../navigation';
import Hammer from 'react-hammerjs';
import cx from 'classnames';
import {bindActionCreators} from 'redux';
import UserAddScreen from '../../components/user-add';
import Logo from '../../icons/archeryLogo.png';

/**
 * The main page of the application that sets up the layout.
 * @returns {XML}
 * @constructor
 */
const MainScreen = ({}) => {

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <img src={Logo} className={styles.logo}/>
            </div>
            <div className={styles.belowHeader}>
                <div className={styles.leftNav}>
                    <Navigation/>
                </div>
                <div className={styles.contentArea}>
                    <Route path={USER_ADD_PATH} component={UserAddScreen}/>
                </div>
            </div>
        </div>
    )
};

const MainScreenContainer = withRouter(MainScreen);

export default MainScreenContainer;
