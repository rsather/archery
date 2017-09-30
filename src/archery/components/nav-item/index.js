import React from 'react'
import cx from 'classnames'
import styles from './nav-item.css'
import Hammer from 'react-hammerjs'
import Badge from '../badge'

/**
 * The types of navigation items possible. Primary is used for
 * main navigation look and feel. Secondary is meant for sub menus.
 * @type {{primary: string, secondary: string}}
 */
export const navTypes = {
    primary: "primary",
    secondary: "secondary"
};

/**
 * React Component that represents a Nav Item
 * @param {string} label - Sets the label.
 * @param {bool} active - Sets the active state.
 * @param {number} notificationCount - Sets the count for notifications to display in a badge.
 * @param {function} onTap - Called when user taps or clicks on the component.
 * @param {string} navType - Type of navigation item this is. This will dictate the look and feel of the NavItem.
 * @returns {XML}
 * @constructor
 */
const NavItem = ({ label, active, notificationCount, onTap, navType = navTypes.primary}) => {
    let container = cx(styles.container, {[styles.active]: active}, {[styles.primary]: navType == navTypes.primary}, {[styles.secondary]: navType == navTypes.secondary});

    return (
        <Hammer onTap={onTap} onPressUp={onTap}>
            <div className={container}>
                <div className={cx(styles.activeBar, {[styles.hidden]: !active})}/>
                <div className={styles.label}>{label}</div>
                <div className={styles.badgeContainer}>
                    <Badge count={notificationCount}/>
                </div>
            </div>
        </Hammer>
    );
};

NavItem.propTypes = {
    label: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    notificationCount: React.PropTypes.number,
    onTap: React.PropTypes.func.isRequired
};

export default NavItem;