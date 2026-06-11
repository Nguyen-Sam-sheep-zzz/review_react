import { FETCH_USER_SUCCESS, LOGIN_SUCCESS, LOGIN_ERROR, CLEAR_LOGIN_ERROR } from "./action";

const initialState = {
    users: [],
    userlogined: {},
    loginError: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, userlogined: action.payload, loginError: null };
        case LOGIN_ERROR:
            return { ...state, loginError: action.payload };
        case CLEAR_LOGIN_ERROR:
            return { ...state, loginError: null };
        case FETCH_USER_SUCCESS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default rootReducer;