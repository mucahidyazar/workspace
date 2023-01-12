import { getRandomColor } from "../../../helper/getRandomColor";
import { getRandomYear } from "../../../helper/getRandomYear";
import { GET_PRODUCTS, SET_FILTERS, ADD_BASKET } from "../../types";

const initialState = {
  products: [],
  filteredProducts: [],
  basket: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      const products = action.data.map((item) => ({
        ...item,
        color: getRandomColor(),
        released: getRandomYear(),
        created: getRandomYear(),
      }));
      return {
        ...state,
        products,
        filteredProducts: products,
      };

    case SET_FILTERS:
      const {
        releaseDateMin,
        releaseDateMax,
        createDateMin,
        createDateMax,
        color,
        sortBy,
      } = action.filters;
      const setReleaseDateFilter = state.products.filter(
        (item) =>
          item.released >= parseInt(releaseDateMin) &&
          item.released <= parseInt(releaseDateMax)
      );
      const setCreateDateFilter = setReleaseDateFilter.filter(
        (item) =>
          item.created >= parseInt(createDateMin) &&
          item.created <= parseInt(createDateMax)
      );
      const setColorFilter = setCreateDateFilter.filter((item) => {
        if (color === "") {
          return item;
        } else {
          return item.color === color;
        }
      });
      let sortedArray = setColorFilter;
      function sortByYear() {
        sortedArray = sortedArray.sort((a, b) => {
          if (sortByYear) {
            if (a.released < b.released) {
              return -1;
            } else if (b.released < a.released) {
              return 1;
            } else {
              return 0;
            }
          } else {
            if (b.released < a.released) {
              return -1;
            } else if (a.released < b.released) {
              return 1;
            } else {
              return 0;
            }
          }
        });
      }
      function sortByPrice() {
        sortedArray = sortedArray.sort((a, b) => {
          if (sortByPrice) {
            if (a.price < b.price) {
              return -1;
            } else if (b.price < a.price) {
              return 1;
            } else {
              return 0;
            }
          } else {
            if (b.price < a.price) {
              return -1;
            } else if (a.price < b.price) {
              return 1;
            } else {
              return 0;
            }
          }
        });
      }
      if (!sortBy[1] && sortBy[0] === "sortByYear") {
        sortByYear();
      } else if (!sortBy[1] && sortBy[0] === "sortByPrice") {
        sortByPrice();
      } else if (sortBy[0] === "sortByYear" && sortBy[1] === "sortByPrice") {
        sortByYear();
        sortByPrice();
      } else if (sortBy[0] === "sortByPrice" && sortBy[1] === "sortByYear") {
        sortByPrice();
        sortByYear();
      }
      return {
        ...state,
        filteredProducts: sortedArray,
      };

    case ADD_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};
