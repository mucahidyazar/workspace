import {
  GET_USER,
  ADD_AVATAR,
  UPDATE_USER,
  CLEAR_ERRORS,
  GET_USERS,
  GET_USER_QUIZES,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../../types";

const initialState = {
  users: [],
  sectionLogin: "active",
  sectionRegister: "",
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user,
        },
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case ADD_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          user: {
            ...state.user.user,
            avatar: action.payload,
          },
        },
      };

    case GET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case GET_USER_QUIZES:
      return {
        ...state,
        user: {
          ...state.user,
          user: {
            ...state.user.user,
            quizes: action.quizes,
          },
        },
      };

    default:
      return state;
  }
};
