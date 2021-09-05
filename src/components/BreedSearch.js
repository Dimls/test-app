import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-material-ui-carousel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as actions from "../store/actions/index";
import { Typography } from "@material-ui/core";

const BreedSearch = () => {
  const {
    breeds,
    selectedBreed: { name, description, wikipedia_url },
    images,
  } = useSelector((state) => state.breedsReducer);
  const isLoading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (breeds.length === 0) {
      dispatch(actions.fetchBreeds());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async (e) => {
    dispatch(actions.selectBreed(e.target.value, breeds));
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <FormControl>
            <InputLabel>Breeds</InputLabel>
            <Select value={name} onChange={handleChange}>
              {breeds.map((b) => (
                <MenuItem value={b.name} key={b.id}>
                  {b.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Carousel className="carousel" autoPlay>
            {images.map((i, index) => (
              <img  height="400" src={i.url} key={index} alt={""} />
            ))}
          </Carousel>

          {name && (
            <div className="breed-details">
              <h3>Breed name: {name}</h3>
              <span><b>Breed description:</b> {description}</span>
              <span>
                <b>Wikipedia url:</b> <a href={wikipedia_url}>{wikipedia_url}</a>
              </span>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BreedSearch;
