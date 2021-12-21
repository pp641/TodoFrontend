const createReducers = (
  state = {
    setInitialState: {},
    getInitialState: {},
    allData: [],
    getUserById: {},
    getUserByIdFailed: {},
    updateData: {},
  },
  action
) => {
  switch (action.type) {
    case "GET_DATA": {
      return {
        ...state,
        getInitialState: action.payload,
      };
    }
    case "SET_DATA": {
      return {
        ...state,
        setInitialState: action.payload,
      };
    }
    case "SET_DATA_FAILED": {
      return {
        ...state,
        setInitialState: action.payload,
      };
    }
    case "GET_ALL_USERS": {
      return {
        ...state,
        allData: action.payload,
      };
    }
    case "GET_ALL_USERS_FAILED": {
      return {
        ...state,
        allData: action.payload,
      };
    }
    case "GET_USER_BY_ID": {
      return {
        ...state,
        getUserById: action.payload,
      };
    }
    case "GET_USER_BY_ID_FAILED": {
      return {
        ...state,
        getUserByIdFailed: action.payload,
      };
    }
    case "UPDATE_DATA": {
      return {
        ...state,
        updateData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default createReducers;
