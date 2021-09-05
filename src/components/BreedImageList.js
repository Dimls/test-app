import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import * as actions from "../store/actions/index";

const BreedImageList = () => {
  const { images, votes } = useSelector((state) => state.breedVotesReducer);
  const isLoading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();

  console.log(votes)

  useEffect(() => {
    if (images.length === 0) {
      dispatch(actions.fetchRandomImages());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVoteClick = (val, breeds) => {

     votes.forEach( (v) => {
         breeds.forEach( (b) => {
            if(b.name === v.name){
                if(val=== 1){
                  v.positive ++
                }
                else{
                  v.negative ++
                }
            }
         })
     })
     dispatch(actions.saveVote(votes))
  };

  const handleLoadMoreClick = () => {
    dispatch(actions.fetchRandomImages());
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <ImageList rowHeight={180} cols={3}>
            {images.map(({  url, breeds, id }) => (
              <ImageListItem key={id}>
                <ThumbUpIcon
                  onClick={() => handleVoteClick(1, breeds)}
                  color="primary"
                />
                <ThumbDownIcon
                  onClick={() => handleVoteClick(0, breeds)}
                  color="secondary"
                />
                <img src={url} alt={url} />
              </ImageListItem>
            ))}
          </ImageList>
          <Button
            onClick={() => handleLoadMoreClick()}
            className="load-more-btn"
            variant="contained"
            color="primary"
            startIcon={<AutorenewIcon />}
          >
            MORE
          </Button>
        </>
      )}
    </>
  );
};

export default BreedImageList;
