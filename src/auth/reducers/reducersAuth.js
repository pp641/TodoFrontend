const AuthReducers = (
  state = {
    createAccount: {},
    createAccountFailed: {},
    login: {},
    loginFailed: {},
    isLoggedIn: false,
  },
  action
) => {
  switch (action.type) {
    case "CREATE_NEW_ACCOUNT": {
      return {
        ...state,
        createAccount: action.payload,
      };
    }
    case "CREATE_NEW_ACCOUNT_FAILED": {
      return {
        ...state,
        createAccountFailed: action.payload,
      };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        login: action.payload,
      };
    }
    case "LOGIN_FAILED": {
      return {
        ...state,
        loginFailed: action.payload,
      };
    }
    case "IS_LOGGED_IN": {
      return {
        state,
        isLoggedIn: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducers;
