import axios from "axios";
import { FETCH_BREEDS, FETCH_IMAGES, IS_LOADING, SELECT_BREED } from "./actionTypes";

export const fetchBreeds = () => {
  return async (dispatch, getState) => {
    dispatch({type: IS_LOADING, payload: true});
    const res = await axios.get(`https://api.thecatapi.com/v1/breeds/`);
    dispatch({ type: FETCH_BREEDS, payload: res.data });
    dispatch({type: IS_LOADING, payload: false});
  };
};
export const fetcImages = (payload) => ({
  type: FETCH_IMAGES,
  payload,
});

export const selectBreed = (bName, breeds) => {
    return async (dispatch, getState) => {
        dispatch({type: IS_LOADING, payload: true});
        const breed = breeds.find((b) => b.name === bName);
        const { bId = breed.id } = breed;
        let config = { Authorization: "23abdf2d-984a-4f36-acdc-1ddc02ee3248" };
        const res = await axios.get(
          `https://api.thecatapi.com/v1/images/search?breed_id=${bId}&limit=3&format="src"&size="small"&type="jpg"`,
          { headers: config }
        );
        // dispatch(actions.isLoading(true));
        dispatch({type: SELECT_BREED, payload: bName});
        dispatch({ type: FETCH_IMAGES, payload: res.data})
        dispatch({type: IS_LOADING, payload: false});
    }

}

export const isLoading = (payload) => ({
    type: IS_LOADING,
    payload,
})