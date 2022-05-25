import React from "react";
import { useState } from "react";
import "./form.css";

function Form({ name, setname, ph, setph }) {
  return (
    <>
      <div className="formm">
        <form className="mainform">
          <div className="fi">
            <label className="labell">name:</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => {
                console.log("asas");
                setname(e.target.value);
              }}
            ></input>
          </div>
          <div className="si">
            <label className="labell">Enter your Number:</label>
            {/* <input type="text" placeholder="Enter Phone"></input> */}
            <div id="input-wrapper">
              <label className="contcode" for="number">
                +91 &nbsp;&nbsp;
              </label>
              <input
                id="number"
                value={ph}
                placeholder="  0 0 0 0 0 - 0 0 0 0 0"
                onChange={(e) => {
                  let bo = 1,
                    str = e.target.value;
                  for (let i = 2; i < str.length; i++) {
                    if (
                      e.target.value.charAt(i) < "0" ||
                      e.target.value.charAt(i) > "9"
                    ) {
                      console.log(e.target.value.charAt(i));
                      bo = 0;
                    }
                  }
                  if (e.target.value.trim().length == 11 || !bo) {
                    // console.log(e.target.value);
                  } else setph("  " + e.target.value.trim());
                }}
                type="text"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
