import axios from 'axios';

//exports
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getNYT = (category) => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
    .get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
}