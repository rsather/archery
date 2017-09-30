import React from 'react';
import Hammer from 'react-hammerjs';
import styles from './button.css';
import cx from 'classnames';

export const buttonTypes = {
    primary: "primary",
    secondary: "secondary",
    danger: "danger"
};

/**
 * A button that can have an icon that is optimized for touch interfaces
 * @param {function} onTap - Called when the button is clicked.
 * @param {string} [buttonType] - Sets the style type of the button. One of `primary`, `secondary`, and `danger`.
 * Defaults to `primary`.
 * @param {number|string} [width] - If supplied, defines the css width of the button.
 * @param {string} [iconUrl] - The url to the icon to display.
 * @param {boolean} [disabled] - Sets whether the button should be disabled or not.
 * @param props - Place holder for html button props.
 *
 *
 * @example <caption>minimal</caption>
 * <Button onTap={() => console.log("I was clicked")}>Click Me</Button>
 *
 * @example <caption>disabled</caption>
 * <Button disabled={true} onTap={() => console.log("never gonna happen")}>Try Me</Button>
 */
const Button = ({onTap, buttonType = buttonTypes.primary, width, iconUrl, ...props}) => {
    const buttonStyles = cx(styles.container,
        {
            [styles.primary]: buttonType == buttonTypes.primary,
            [styles.danger]: buttonType == buttonTypes.danger,
            [styles.secondary]: buttonType == buttonTypes.secondary
        }
    );

    return (
        <Hammer onPressUp={onTap} onTap={onTap} options={{
            recognizers: {
                tap: {enable: !props.disabled},
                press: {enable: !props.disabled}
            }
        }}>
            <button style={(width) ? {width: width} : null} className={buttonStyles} {...props}>
                <div className={styles.contentWrapper}>
                    {(iconUrl) ? <img className={styles.icon} src={iconUrl}/> : null}
                    <div className={styles.buttonText}>{props.children}</div>
                </div>
            </button>
        </Hammer>
    )
};

Button.propTypes = {
    onTap: React.PropTypes.func.isRequired,
    buttonType: React.PropTypes.string,
    width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    iconUrl: React.PropTypes.string
};

export default Button;