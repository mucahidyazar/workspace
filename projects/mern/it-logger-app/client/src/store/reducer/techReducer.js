import {
  SET_LOADING,
  GET_TECHS,
  ADD_TECH,
  TECHS_ERROR,
  DELETE_TECH
} from "../action/actionTypes";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS: {
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    }
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech._id !== action.payload),
        loading: false
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
