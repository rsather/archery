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
 * @param {string} id - Unique id for the input, required by react.
 * @param {string} type - The HTML type of the input.
 * @param {string} inputType - The type of the input field, style specific.
 * @param {string} placeholder - The placeholder text for the input
 * @param {function} handler - Function to handle changes to the input value.
 * @param {*} value - The value of the input.
 * @returns {XML}
 * @constructor
 */
const InputContainer = ({id, type, inputType = inputTypes.primary, placeholder, handler, value, ...props}) => {
    const inputStyles = cx(styles.container,
        {
            [styles.primary]: inputType === inputTypes.primary,
            [styles.secondary]: inputType === inputTypes.secondary
        }
    );

    return (
        <input className={inputStyles} id={id} placeholder={placeholder} type={type} onChange={(e) => handler(e.target.value)} value={value} {...props}/>
    )};

export default InputContainer;