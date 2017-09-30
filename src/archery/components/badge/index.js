import React from 'react'
import styles from './badge.css'
import { FormattedNumber } from 'react-intl';

/**
 * Displays a red badge with number when count is more than 0
 * @param {number} count - The number to show in the badge
 * @returns {*}
 * @constructor
 */
const Badge = ({count}) => {
    return count && count > 0 ? <div className={styles.badge}>{<FormattedNumber value={count}/>}</div> : null;
};

Badge.propTypes = {
    count: React.PropTypes.number
};

export default Badge;