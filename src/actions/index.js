import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { provider } from "../firebase";
import { SET_USER } from "./actionType";

const auth = getAuth();

export const setUser = payload => ({
    type: SET_USER,
    user: payload
})

export const signInAPI = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider).then((payload) => {
            dispatch(setUser(payload.user));
        }).catch((err) => alert(err.message));
    }
}

export const getUserAuth = () => {
    return dispatch => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                dispatch(setUser(user));
            }
        })
    }
}

export const signOutAPT = () => {
    return dispatch => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
        }).catch((err) => {
            console.log(err.message);
        })
    };
}