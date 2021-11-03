import axios from "axios";

export const FETCH_SAMPLES_SUCCES = "FETCH_SAMPLES_SUCCESS";
let apiURL = "dummy data";
let DEFAULT_PAGINATION_LIMIT = "10";

export const fetchSamplesSuccess = (samples) => ({
  type: FETCH_SAMPLES_SUCCES,
  payload: samples,
});

export const fetchSamples = () => {
  return async (dispatch, getState) => {
    const samplesCount = getState().samples.allSamples.length;
    const response = await axios.get(
      `${apiURL}/samples?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${samplesCount}`
    );

    // console.log(response.data);
    dispatch(fetchSamplesSuccess(response.data.spaces.rows));
  };
};
