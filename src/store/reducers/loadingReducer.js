import { IS_LOADING } from "../actions/actionTypes";

export const loadingReducer = (state = false, {type, payload}) => {
    switch (type) {
        case IS_LOADING:
          return payload;
        default:
          return state;
      }
}