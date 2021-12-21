const AuthReducers = (
  state = {
    createAccount: {},
    createAccountFailed: {},
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
    default: {
      return state;
    }
  }
};

export default AuthReducers;
