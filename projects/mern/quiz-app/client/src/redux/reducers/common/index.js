import { GET_IMAGE } from "../../types";

const initialState = {};

export const common = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        imageInformation: action.imageData,
      };

    default:
      return state;
  }
};
