import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from "../action/actionTypes";

const initialState = {
  logs: null,
  filteredLogs: null,
  current: null,
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log._id !== action.payload),
        loading: false
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log._id === action.payload._id ? action.payload : log
        ),
        loading: false
      };

    case SEARCH_LOGS:
      return {
        ...state,
        filteredLogs:
          action.payload !== ""
            ? state.logs.filter(log =>
                log.message.includes(action.payload) ||
                log.tech.includes(action.payload)
                  ? log
                  : null
              )
            : state.logs,
        loading: false
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.log(action.error);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
