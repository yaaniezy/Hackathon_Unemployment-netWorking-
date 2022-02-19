import { bindActionCreators } from "redux";

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE.action) => {
  switch (bindActionCreators.type) {
    default:
      return state;
  }
};

export default userReducer;
