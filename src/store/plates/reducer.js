import {} from "../appState/actions";

const initialState = {
  loading: true,
  plate: [],
};

export default function Plates(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
