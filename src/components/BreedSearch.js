import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Carousel from "react-material-ui-carousel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as actions from '../store/actions/index';

const BreedSearch = () => {
  const {
    breeds,
    selectedBreed,
    images
  } = useSelector((state) => state.breedsReducer);
  const isLoading = useSelector( (state) => state.loadingReducer);
  const dispatch = useDispatch();  

  useEffect(() => {
    if(breeds.length === 0){
        dispatch(actions.fetchBreeds())      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async (e) => {
    dispatch(actions.selectBreed(e.target.value, breeds))
  };


  return (
    <>
      {isLoading ? <CircularProgress /> : (
        <>
          <FormControl>
            <InputLabel >Breeds</InputLabel>
            <Select
              value={selectedBreed}
              onChange={handleChange}
            >
              {breeds.map((b) => (
                <MenuItem value={b.name} key={b.id}>
                  {b.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Carousel className="carousel" autoPlay>
            {images.map((i, index) => (
              <img
                width="500"
                height="500"
                src={i.url}
                key={index}
                alt={""}
              />
            ))}
          </Carousel>
        </>
      )}
    </>
  );
};

export default BreedSearch;
