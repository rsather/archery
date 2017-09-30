import React from 'react'
import styles from './overlay-generic.css'
import Hammer from 'react-hammerjs'

/**
 * Displays its content in a modal window.
 * @param {boolean} isOpen - If `true` the modal will be open otherwise close.
 * @param {function} onCloseRequested - Called when the user requests close such as by clicking away from the modal
 * @param {*} [top] - Position from the top to show the child of the overlay.
 * @param {*} [left] - Position from the left to show the child of the overlay.
 * @param {boolean} [sticky] - If `true`, close requests triggered by clicking away from the modal are ignored.
 * @param children - Placeholder for the child contents of the modal.
 * @returns {*}
 * @constructor
 */
const OverlayGeneric = ({isOpen, onCloseRequested, top, left, sticky, children}) => {
    let positionStyle = {};
    if (typeof top !== "undefined" || typeof left !== "undefined") {
        positionStyle = {top: top, left: left, position: 'absolute'};
    }
    if (isOpen){
        return (
            <Hammer onTap={(event)=> onCloseClick(event, onCloseRequested, sticky)} onPress={(event)=> onCloseClick(event, onCloseRequested, sticky)} options={{domEvents: true}}>
                <div id="overlay-generic-child-container" className={styles.container}>
                    <div className={styles.modal} style={positionStyle}>
                        {children}
                    </div>
                </div>
            </Hammer>
        );
    }
    return null;
};

function onCloseClick(event, onCloseRequested, sticky) {
    if (!sticky && event.target.id === "overlay-generic-child-container") {
        onCloseRequested();
    }
}

OverlayGeneric.propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    onCloseRequested: React.PropTypes.func.isRequired,
    top: React.PropTypes.any,
    left: React.PropTypes.any,
    sticky: React.PropTypes.bool,
};

export default OverlayGeneric;