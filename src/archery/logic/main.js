// Action type strings
export const MAIN_GREETING_CHANGED = "MAIN_GREETING_CHANGED";

// Actions
export function mainGreetingChanged(greeting) {
    return {
        type: MAIN_GREETING_CHANGED,
        payload: {
            greeting
        }
    }
}

export function greetingClickHandler() {
    return (dispatch) => {
        dispatch(mainGreetingChanged("Some different greeting"));
    }
}

// Reducer
const initialState = {
    greeting: "helloWorld"
};

export default function main(state = initialState, action) {
    switch(action.type) {
        case MAIN_GREETING_CHANGED:
            return {
                ...state,
                greeting: action.payload.greeting
            };
        default:
            return state;
    }
}