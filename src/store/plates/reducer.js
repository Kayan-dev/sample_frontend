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

/*

Plate: {
  Barcode: 555
  Owner: Alex,
  Source: Hamilton,
  Volume: 50 uL,
  Buffer: Tris 9.0,
  SampleType: DNA,
  Sample: [
    {
    ID: 234,
    ID: 12235,
    ID: 5690,
    ID: 5690
    }
  ]
}

*/
