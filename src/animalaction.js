import axios from "axios";
export const getAnimals = () => async dispatch => {
  const res = await axios.get(
    "https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json"
  );
  dispatch({
    type: "GET_ANIMALS",
    payload: res.data
  });
};
