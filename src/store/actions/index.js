import axios from "axios";
import { FETCH_BREEDS, FETCH_BREED_IMAGES, FETCH_RANDOM_IMAGES, IS_LOADING, SELECT_BREED } from "./actionTypes";

const API_KEY = "23abdf2d-984a-4f36-acdc-1ddc02ee3248";

export const fetchBreeds = () => {
  return async (dispatch, getState) => {
    dispatch({type: IS_LOADING, payload: true});
    const res = await axios.get(`https://api.thecatapi.com/v1/breeds/`);
    dispatch({ type: FETCH_BREEDS, payload: res.data });
    dispatch({type: IS_LOADING, payload: false});
  };
};
export const fetchBreedImages = (payload) => ({
  type: FETCH_BREED_IMAGES,
  payload,
});

export const selectBreed = (bName, breeds) => {
    return async (dispatch, getState) => {
        dispatch({type: IS_LOADING, payload: true});
        const breed = breeds.find((b) => b.name === bName);
        const { bId = breed.id } = breed;
        const config = { Authorization: API_KEY };
        const res = await axios.get(
          `https://api.thecatapi.com/v1/images/search?breed_id=${bId}&limit=3&format="src"&size="small"&type="jpg"`,
          { headers: config }
        );
        // dispatch(actions.isLoading(true));
        dispatch({type: SELECT_BREED, payload: breed});
        dispatch({ type: FETCH_BREED_IMAGES, payload: res.data})
        dispatch({type: IS_LOADING, payload: false});
    }

}

export const fetchRandomImages = () => {
    return async (dispatch, getState) => {
      dispatch({type: IS_LOADING, payload: true});
      const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=9&format="src"&size"small"&type="jpg"`);
      dispatch({ type: FETCH_RANDOM_IMAGES, payload: res.data });
      dispatch({type: IS_LOADING, payload: false});
    };
  };

export const voteImage = (val, imageId) => {
    return (dispatch, getState) => {
        const config = { Authorization: API_KEY };
        const data = {
            "image_id": imageId,
            "sub_id": "Test user",
            "value": val
        }
        axios.post(
          `https://api.thecatapi.com/v1/votes`,
          data,
          { headers: config }
        );
      };
}

export const isLoading = (payload) => ({
    type: IS_LOADING,
    payload,
})