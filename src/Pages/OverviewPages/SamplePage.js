import React, { useState } from "react";
import InputForm from "../../components/Form/InputForm";

export default function SamplePage() {
  const state = [
    {
      Barcode: 5634,
      Owner: "Efe",
      Source: "MS-qPCR",
      Volume: "2 ml",
      Buffer: "Trist 8.0 pH",
      SampleType: "DNA",
    },
    {
      Barcode: 4334,
      Owner: "Marta",
      Source: "MSD",
      Volume: "Ghappy",
      Buffer: "Bachata",
      SampleType: "Sugar",
    },
  ];

  const [plates, setPlates] = useState([state]);
  const [barcode, setBarcode] = useState([""]);

  const onSubmitChange = (csv) => {
    const newState = [...state];
    newState.push(csv);
    setPlates({ owner: newState });
    console.log("Changed:", plates);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setBarcode(e.target.value);

    console.log("submitted", e.target.value);
  };

  if (!state) return <div>"Loading...</div>;
  return (
    <div>
      <h3>The Sample Overview Page</h3>
      <h2>Hello </h2>

      {/* <InputForm onSubmitChange={onSubmitChange} /> */}

      <article className="br3 bg-white-10 mv4 w-100 w-60-m w-40-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Input CSV</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Barcode
                </label>
                <input
                  className="pa2 input-reset b--green bg-transparent hover-bg-grey hover-black w-100"
                  type="name"
                  name="name"
                  id="name"
                  onChange={(event) =>
                    setBarcode(onSubmitChange(event.target.value))
                  }
                  value={barcode}
                  required
                />
              </div>

              <div className="">
                <input
                  onClick={submitForm}
                  className="b ph3 pv2 input-reset bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </fieldset>
          </form>
        </main>
      </article>

      <div>
        {state.map((columns, i) => {
          return (
            <div>
              <p> Barcode: {columns.Barcode} </p>
              <p> Owner: {columns.Owner} </p>
              <p> Volume: {columns.Volume} </p>
              <p> Buffer: {columns.Buffer} </p>
              <p> SampleType: {columns.SampleType} </p>
              <br></br>
            </div>
          );
        })}
      </div>
      {/* <p> {state[0].Barcode} </p>
      <p> {state[0].Owner} </p>
      <p> {state[0].Source} </p>
      <p> {state[0].Volume} </p>
      <p> {state[0].SampleType} </p>
      <br></br> */}
    </div>
  );
}
