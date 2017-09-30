import React from 'react';
import styles from './input.css';
import cx from 'classnames';

export const inputTypes = {
    primary: "primary",
    secondary: "secondary"
};

/**
 * Wraps the functionality around an input to style it for the application.
 * This should be used in place of the <input> element.
 * @param {string} inputType - The type of the input field, style specific.
 * @param {function} handler - Function to handle changes to the input value.
 * @returns {XML}
 * @constructor
 */
const InputContainer = ({inputType = inputTypes.primary, handler, ...props}) => {
    const inputStyles = cx(styles.container,
        {
            [styles.primary]: inputType === inputTypes.primary,
            [styles.secondary]: inputType === inputTypes.secondary
        }
    );

    return (
        <input className={inputStyles} onChange={(e) => handler(e.target.value)} {...props}/>
    )};

export default InputContainer;