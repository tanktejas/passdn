import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import serviceslogo from "../images/hair-cut.png";

function Line({ fstle, sets, service, setservice, serr }) {
  const [curr, setcurr] = useState(serr);

  return (
    <>
      <div className="allservices">
        {/* using map method */}

        <div
          className="os"
          onClick={() => {
            let aee = service;
            if (service.includes("Shampoo")) {
              aee = service.filter((ele) => {
                return ele != "Shampoo";
              });
              setservice(aee);
            } else {
              aee.push("Shampoo");
              setservice(aee);
            }
            // console.log(service);
            let curr = fstle;
            if (fstle[0].color == "black") {
              sets([
                { color: "blue" },
                { color: curr[1].color },
                { color: curr[2].color },
                { color: curr[3].color },
              ]);
            } else {
              sets([
                { color: "black" },
                { color: curr[1].color },
                { color: curr[2].color },
                { color: curr[3].color },
              ]);
            }

            // console.log(curr);
          }}
          style={{
            border: `${fstle[0].color == "black" ? "1px" : "2.4px"} solid ${
              fstle[0].color
            }`,
          }}
        >
          <img src={serviceslogo}></img>
          <div>
            <p>Shampoo</p>
          </div>
        </div>
        <div
          className="os"
          onClick={() => {
            //set services
            let aee = service;
            if (service.includes("Styling")) {
              aee = service.filter((ele) => {
                return ele != "Styling";
              });
              setservice(aee);
            } else {
              aee.push("Styling");
              setservice(aee);
            }

            let curr = fstle;
            // console.log(curr[1].color);
            if (fstle[1].color == "black") {
              sets([
                { color: curr[0].color },
                { color: "blue" },
                { color: curr[2].color },
                { color: curr[3].color },
              ]);
            } else {
              sets([
                { color: curr[0].color },
                { color: "black" },
                { color: curr[2].color },
                { color: curr[3].color },
              ]);
            }
            // console.log(curr);
          }}
          style={{
            border: `${fstle[1].color == "black" ? "1px" : "2.4px"} solid ${
              fstle[1].color
            }`,
          }}
        >
          <img src={serviceslogo}></img>
          <div>
            <p>Styling</p>
          </div>
        </div>

        {/* will add if some services comes */}
        <div
          className="os"
          onClick={() => {
            // set services
            let aee = service;
            if (service.includes("shave")) {
              aee = service.filter((ele) => {
                return ele != "shave";
              });
              setservice(aee);
            } else {
              aee.push("shave");
              setservice(aee);
            }

            let curr = fstle;
            // console.log(curr[2].color);
            if (fstle[2].color == "black") {
              sets([
                { color: curr[0].color },
                { color: curr[1].color },
                { color: "blue" },
                { color: curr[3].color },
              ]);
            } else {
              sets([
                { color: curr[0].color },
                { color: curr[1].color },
                { color: "black" },
                { color: curr[3].color },
              ]);
            }
          }}
          style={{
            border: `${fstle[2].color == "black" ? "1px" : "2.4px"} solid ${
              fstle[2].color
            }`,
          }}
        >
          <img src={serviceslogo}></img>
          <div>
            <p>Hair</p>
          </div>
        </div>
        <div
          className="os"
          onClick={() => {
            //set services.
            let aee = service;
            if (service.includes("hair-color")) {
              aee = service.filter((ele) => {
                return ele != "hair-color";
              });
              setservice(aee);
            } else {
              aee.push("hair-color");
              setservice(aee);
            }

            let curr = fstle;
            // console.log(curr[3].color);
            if (fstle[3].color == "black") {
              sets([
                { color: curr[0].color },
                { color: curr[1].color },
                { color: curr[2].color },
                { color: "blue" },
              ]);
            } else {
              sets([
                { color: curr[0].color },
                { color: curr[1].color },
                { color: curr[2].color },
                { color: "black" },
              ]);
            }
          }}
          style={{
            border: `${fstle[3].color == "black" ? "1px" : "2.4px"} solid ${
              fstle[3].color
            }`,
          }}
        >
          <img src={serviceslogo}></img>
          <div>
            <p>Hair</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Line;
