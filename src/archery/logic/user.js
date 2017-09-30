import axios from 'axios';

// Action type strings
export const USER_EMAIL_CHANGED = "USER_EMAIL_CHANGED";
export const USER_NAME_CHANGED = "USER_NAME_CHANGED";
export const USER_PHONE_CHANGED = "USER_PHONE_CHANGED";
export const USER_SET_USER = "USER_SET_USER";
export const USER_WORKING = "USER_WORKING";

// Actions
export function userNameChanged(name) {
    return {
        type: USER_NAME_CHANGED,
        payload: {
            name
        }
    }
}

export function userEmailChanged(email) {
    return {
        type: USER_EMAIL_CHANGED,
        payload: {
            email
        }
    }
}

export function userPhoneChanged(phone) {
    return {
        type: USER_PHONE_CHANGED,
        payload: {
            phone
        }
    }
}

export function userWorking(working) {
    return {
        type: USER_WORKING,
        payload: {
            working
        }
    }
}

export function userSetUser(user) {
    return {
        type: USER_SET_USER,
        payload: {
            user
        }
    }
}

export function addUser(name, email, phone) {
    return (dispatch) => {
        dispatch(userWorking(true));
        let userPayload = {
            name,
            email,
            phone
        };
        axios.post(`/api/user/add`, userPayload)
            .then((response) => {
                dispatch(userWorking(false));
            })
            .catch((error) => {
                dispatch(userWorking(false));
            })
    }
}

// Reducer
const initialState = {
    name: "",
    email: "",
    phone: "",
    working: false
};

export default function main(state = initialState, action) {
    switch(action.type) {
        case USER_EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload.email
            };
        case USER_NAME_CHANGED:
            return {
                ...state,
                name: action.payload.name
            };
        case USER_PHONE_CHANGED:
            return {
                ...state,
                phone: action.payload.phone
            };
        case USER_SET_USER:
            return {
                ...state,
                name: action.payload.user.name,
                email: action.payload.user.email,
                phone: action.payload.user.phone
            };
        case USER_WORKING:
            return {
                ...state,
                working: action.payload.working
            };
        default:
            return state;
    }
}