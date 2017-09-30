import React from 'react'
import styles from './nav-header.css'

/**
 * React Component that represents a Nav Header
 * @param {string} label - Sets the label.
 * @param {string} icon - Sets the Nav icon.
 * @returns {XML}
 * @constructor
 */
const NavHeader = ({ label, icon}) => {

    return (
        <div className={styles.container}>
            <img className={styles.icon} src={icon}/>
            <div className={styles.label}>{label}</div>
        </div>
    );
};

NavHeader.propTypes = {
    label: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string
};

export default NavHeader;