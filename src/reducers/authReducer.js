const INITIAL_STATE = {
  isSignedIn: false,

  userId: null,
  Authorization: "null",
  userName: "",
  user_type: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        Authorization: action.payload.token,
        userName: action.payload.username,

        user_type: action.payload.user_type,
      };
    case "SET_USER_AUTH":
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        Authorization: action.payload.Authorization,
        userName: action.payload.userName,

        user_type: action.payload.user_type,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        Authorization: "",
        userName: "",

        user_type: "",
      };
    default:
      return state;
  }
};
