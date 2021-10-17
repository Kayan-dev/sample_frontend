import React, { useState } from "react";

export default function InputForm() {
  const [barcode, setBarcode] = useState("");
  const [owner, setOwner] = useState("");
  const [source, setSource] = useState("");

  function submitForm(event) {
    event.preventDefault();
  }

  return (
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
                className="pa2 input-reset b--navy bg-transparent hover-bg-black hover-white w-100"
                type="name"
                name="name"
                id="name"
                onChange={(event) => setBarcode(event.target.value)}
                value={barcode}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Owner
              </label>
              <input
                className="pa2 input-reset b--navy bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(event) => setOwner(event.target.value)}
                value={owner}
                required
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Source
              </label>
              <input
                className="b pa2 input-reset b--navy bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={(event) => setSource(event.target.value)}
                value={source}
                required
              />
            </div>
            <div className="">
              <input
                onClick={submitForm}
                className="b ph3 pv2 input-reset b--navy bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign up"
              />
            </div>
          </fieldset>
        </form>
      </main>
    </article>
  );
}
