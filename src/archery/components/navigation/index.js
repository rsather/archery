import React from 'react';
import NavItem from '../nav-item';
import styles from './navigation.css';
import { USER_ADD_PATH, history, isActive } from '../../routes';
import { withRouter, matchPath } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import NavHeader from '../nav-header';

/**
 * Main navigation for the application.
 * Each section of the navigation could be rendered separately
 * and controlled by roles. It is always better to not render a menu
 * option if the user doesn't have permission rather than hide it with css.
 * @param {object} location - Current URL location.
 * @param {function} intl - Internationalization HOC to get language strings back out.
 * @returns {XML}
 * @constructor
 */
const Navigation = ({location, intl}) => {
    return (
        <div className={styles.container}>
            <div className={styles.navSection}>
                <NavHeader label={intl.formatMessage({id: "user"})}/>
                <NavItem label={intl.formatMessage({id: "userAdd"})}
                         active={isActive(location.pathname, USER_ADD_PATH)}
                         onTap={() => history.push(USER_ADD_PATH)}/>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {

    }
}

const NavigationContainer = withRouter(injectIntl(connect(mapStateToProps)(Navigation)));

export default NavigationContainer;