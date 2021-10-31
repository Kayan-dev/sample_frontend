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
  Owner
  Source
  Volume
  Buffer
  SampleType,
  Sample: [
    {
    ID: 1234,
    ID: 1235,
    ID: 2345
    }
  ]
}

/*
Sample: {
  Barcode: 1234,
  Location
  FreezerID
  Date
  PlateType
  PlateID: 555
}
*/
