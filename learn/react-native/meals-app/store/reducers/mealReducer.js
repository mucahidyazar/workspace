import { MEALS } from '../../data/dummy-data';
import * as actionTypes from '../actionTypes';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      if (state.favoriteMeals.filter(meal => meal.id === action.mealId)[0]) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(meal => meal.id !== action.mealId)
        }
      } else {
        return {
          ...state,
          favoriteMeals: [
            ...state.favoriteMeals,
            state.meals.filter(meal => meal.id === action.mealId)[0]
          ]
        }
      }
    case actionTypes.SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGluttenFree) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      })
      return {
        ...state,
        filteredMeals: updatedFilteredMeals
      }

    default: {
      return state;
    }
  }
}

export default mealsReducer;