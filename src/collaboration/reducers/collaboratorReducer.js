const collaboratorReducers = (
  state = {
    getAllUsers: [],
    getAllUsersFailed: [],
    getSelectedValuesFromAutoComplete: [],
    recordCreationDetails: {},
    getAllCollaborations: [],
    populateValuesForUpdation: [],
    updateValuesForUpdation: [],
    setTaskForCollaboration: [],
  },
  action
) => {
  switch (action.type) {
    case "GET_ALL_USERS_ONCE": {
      return {
        ...state,
        getAllUsers: action.payload,
      };
    }
    case "SET_COLLABORATOR_DATA": {
      return {
        ...state,
        recordCreationDetails: action.payload,
      };
    }

    case "GET_ALL_USERS_ONCE_FAILED": {
      return {
        ...state,
        getAllUsersFailed: action.payload,
      };
    }

    case "GET_SELECTED_VALUES_FROM_AUTOCOMPLETE": {
      return {
        ...state,
        getSelectedValuesFromAutoComplete: action.payload,
      };
    }
    case "GET_ALL_COLLABORATIONS": {
      return {
        ...state,
        getAllCollaborations: action.payload,
      };
    }
    case "POPULATE_VALUES_FOR_UPDATION": {
      return {
        ...state,
        populateValuesForUpdation: action.payload,
      };
    }
    case "UPDATE_VALUES_FOR_UPDATION": {
      return {
        updateValuesForUpdation: action.payload,
      };
    }
    case "SET_TASK_FOR_COLLABORATION": {
      return {
        setTaskForCollaboration: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default collaboratorReducers;
