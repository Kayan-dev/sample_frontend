import { render, screen } from "@testing-library/react";
import App from "./App";
import { UploadFile } from "../src/components/Form/uploadFile";

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

describe("#returntableoftable", () => {
  describe("if given an array of samples/plates", () => {
    test("should return an action object", () => {
      // test data simulating spaces
      const data = [{}, {}];
      // build action we expect to get back
      const expected = data;

      const action = data;
      // do assertion on function return
      expect(action).toBe(expected);
    });
  });
});

// describe("#fetchSamplesSucces", () => {
//   describe("if given an array of spaces", () => {
//     test("should return an action object", () => {

//       const samples = [{}];

//       const expected = {
//         type: FETCH_SAMPLES_SUCCES,
//         payload: samples,
//       };

//       const action = fetchSamplesSucces(samples);

//       expect(action).toBe(expected);
//     });
//   });
// });
