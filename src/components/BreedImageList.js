import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import * as actions from "../store/actions/index";

const BreedImageList = () => {
  const { images } = useSelector((state) => state.randomBreedImageReducer);
  const isLoading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchRandomImages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick =  (val, id) => {
      console.log(val)
      dispatch(actions.voteImage(val, id))
    // dispatch(actions.selectBreed(e.target.value, breeds))
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <ImageList rowHeight={180} cols={3}>
            {images.map(({id, url}) => (
              <ImageListItem  key={id}>
                  <ThumbUpIcon onClick={() => handleClick(1, id)} color="primary"/>
                  <ThumbDownIcon onClick={() => handleClick(0, id)}  color="secondary"/>
                <img src={url} alt={url} />
                {/* <ImageListItemBar
                  title={'TEST'}
                  subtitle={<span>by: </span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info `}
                    >
                    </IconButton>
                  }
                />  */}
              </ImageListItem>
            ))}
          </ImageList>
        </>
      )}
    </>
  );
};

export default BreedImageList;
