import {auth,provder} from "../firebase";

import function signInAPI(){
    return (dispatch) => {
        auth.signInWithPopup(provider).then((payload) => {
            console.log(payload);
        })
        .catch((error) => alert(error.message));
    }
}