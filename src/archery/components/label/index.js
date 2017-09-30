import React from 'react';
import styles from './label.css';
import cx from 'classnames';


export const labelTypes = {
    primary: "primary",
    secondary: "secondary",
};

/**
 * Wrapper for the <label> element to have consistent behavior and look throughout the application.
 * This should be used in place of the <label> element.
 * @param {string} htmlFor - ID of the input the label is for.
 * @param {string} labelType - The type of label to be displayed, style specific.
 * @param {*} props - The rest of the props that will be applied to a <label> element.
 * @returns {XML}
 * @constructor
 */
const LabelContainer = ({htmlFor, labelType = labelTypes.primary, ...props}) => {
    const labelStyles = cx(styles.label,
        {
            [styles.primary]: labelType === labelTypes.primary,
            [styles.secondary]: labelType === labelTypes.secondary
        }
    );

    return (
        <label className={labelStyles} htmlFor={htmlFor} {...props}> {props.children} </label>
    )
};

export default LabelContainer;