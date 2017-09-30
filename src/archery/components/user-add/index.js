import React from 'react';
import styles from './user-add.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';
import Button, { buttonTypes } from '../../components/button';
import Label from '../../components/label';
import Input from '../../components/input';
import { userNameChanged, userEmailChanged, userPhoneChanged, addUser } from '../../logic/user';

const UserAddScreen = ({name, email, phone, onAddUser, onNameChanged, onEmailChanged, onPhoneChanged, intl}) => {

    return (
        <form className={styles.container} onSubmit={(e) => { e.preventDefault(); onAddUser(name, email, phone);}}>
            <div className={styles.inputGroup}>
                <Label className={styles.label} htmlFor="ArcherName">{intl.formatMessage({id: "name"})}</Label>
                <Input id="ArcherName" type="text" placeholder={intl.formatMessage({id: "archerName"})} handler={onNameChanged} value={name}/>
            </div>
            <div className={styles.inputGroup}>
                <Label className={styles.label} htmlFor="ArcherEmail">{intl.formatMessage({id: "email"})}</Label>
                <Input id="ArcherEmail" type="text" placeholder={intl.formatMessage({id: "archerEmail"})} handler={onEmailChanged} value={email}/>
            </div>
            <div className={styles.inputGroup}>
                <Label className={styles.label} htmlFor="ArcherPhone">{intl.formatMessage({id: "phone"})}</Label>
                <Input id="ArcherPhone" type="text" placeholder={intl.formatMessage({id: "archerPhone"})} handler={onPhoneChanged} value={phone}/>
            </div>
            <div className={styles.addButton}>
                <Button type="submit" buttonType={buttonTypes.primary} width={100} onTap={() => {}} disabled={submitIsDisabled(name, email, phone)}>{intl.formatMessage({id: "add"})}</Button>
            </div>
        </form>
    )
};

function submitIsDisabled(name, email, phone) {
    return (name == null || name.trim() === ""
        || email === null || email.trim() === ""
        || phone === null || phone.trim() === ""
    );
}

function mapStateToProps(state){
    return {
        name: state.user.name,
        email: state.user.email,
        phone: state.user.phone
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        onNameChanged: userNameChanged,
        onEmailChanged: userEmailChanged,
        onPhoneChanged: userPhoneChanged,
        onAddUser: addUser
    }, dispatch)
}

const UserAddScreenContainer = injectIntl(connect(mapStateToProps, mapDispatchToProps)(UserAddScreen));

export default UserAddScreenContainer;
