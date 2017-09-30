import React from 'react';
import styles from './user-add.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';
import Button, { buttonTypes } from '../../components/button';
import Label from '../../components/label';
import Input from '../../components/input';

const UserAddScreen = ({intl}) => {

    return (
        <div className={styles.container}>
            User Add Screen
        </div>
    )
};

function mapStateToProps(state){
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}

const UserAddScreenContainer = injectIntl(connect(mapStateToProps, mapDispatchToProps)(UserAddScreen));

export default UserAddScreenContainer;
