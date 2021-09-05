import {
  SELECT_BREED,
  FETCH_BREEDS,
  FETCH_BREED_IMAGES,
  FETCH_RANDOM_IMAGES,
  SAVE_VOTE
} from "../actions/actionTypes";

const initialBreedState = {
  breeds: [],
  selectedBreed: { name: ""},
  images: [],
};

const initialBreedVotesReducer = {
  votes: [],
  images: []
}

export const breedsReducer = (state = initialBreedState, { type, payload }) => {
  switch (type) {
    case FETCH_BREEDS:
      return { ...state, breeds: payload };
    case FETCH_BREED_IMAGES:
      return { ...state, images: payload };
    case SELECT_BREED:
      return { ...state, selectedBreed: payload };
    default:
      return state;
  }
};

export const breedVotesReducer = (
  state = initialBreedVotesReducer,
  { type, payload }
) => {
  switch (type) {
    case FETCH_RANDOM_IMAGES:
      return { ...state, images: payload };
    case SAVE_VOTE: 
      return {...state, votes: payload }
    default:
      return state;
  }
};
