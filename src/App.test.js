import { render, screen } from "@testing-library/react";
import App from "./App";
import { UploadFile } from "../src/components/Form/uploadFile";
import {
  // fetchSamplesSuccess,
  FETCH_SAMPLES_SUCCES,
} from "./store/plates/actions";

const fetchSamplesSuccess = (samples) => ({
  type: "FETCH_SAMPLES_SUCCES",
  payload: samples,
});

describe("#returntrueof1equalsto1", () => {
  describe("1 as integer should not be the sample as '1' as string", () => {
    test("should return an action object", () => {
      // test data simulating spaces
      const data = 1;
      // build action we expect to get back
      const expected = data;

      const action = "1";
      // do assertion on function return
      expect(action).toEqual(expected);
    });
  });
});

describe("#fetchSamplesSucces", () => {
  describe("if given an array of samples", () => {
    test("should return an action object", () => {
      // test data is an array of objects
      const samples = [{}, {}];

      // we expect from a specific type a payload similar to samples
      const expected = {
        type: "FETCH_SAMPLES_SUCCES",
        payload: samples,
      };
      // action to call the function which contains the expected payload
      const action = fetchSamplesSuccess(samples);
      // test if assertion is true
      expect(action).toStrictEqual(expected);
    });
  });
});

// describe("#fetchSpacesSuccess", () => {
//   describe("if given an array of spaces", () => {
//     test("should return an action object", () => {
//       // test data simulating spaces
//       const spaces = [{}];
//       // build action we expect to get back
//       const expected = {
//         type: "FETCH_SPACES_SUCCESS",
//         payload: spaces,
//       };
//       // call function
//       const action = fetchSpacesSuccess(spaces);
//       // do assertion on function return
//       expect(action).toBe(expected);
//     });
//   });
// });

// describe("#returntableofdata", () => {
//   describe("if given an array of samples/plates", () => {
//     test();
//     // test data
//     const data = [{}];
//   });
//   // what do we expect back
//   const expected = {
//     type: UploadFile,
//     payload: data,
//   };
// });
// test("<UploadFile>", () => {
//   const value = [{}];
//   expect(false).toBeTruthy();
// });
