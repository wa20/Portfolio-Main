import { useReducer } from "react";
import {
  UPDATE_PROJECTS,
  UPDATE_PORTFOLIOS,
  UPDATE_CURRENT_PORTFOLIO,
 
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PROJECTS:
      return {
        ...state,
        projects: [...action.projects],
      };

    case UPDATE_PORTFOLIOS:
      return {
        ...state,
        portfolios: [...action.portfolios],
      };

    case UPDATE_CURRENT_PORTFOLIO:
      return {
        ...state,
        currentPortfolio: action.currentPortfolio
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}