import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import serviceslogo from "../images/hair-cut.png";
import hairwash from "../images/services/Hair wash.png";
import haircut from "../images/services/Hair cut.png";
import beard from "../images/services/Beard Trim.png"; 
import moustache from "../images/services/Moustache.png";
import shapeup from "../images/services/Shape Up.png";
import shave from "../images/services/Shave.png";
import massage from "../images/services/Massage.png";

import Ss from "../images/services/Sp. Hair Cut.png";
function Line({ fstle, sets, service, setservice, serr, barberservices }) {
  const [barbservices, setser] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let item in barberservices) {
      arr.push(item);
    }
    setser(arr);
    console.log(fstle);
  }, []);

  return (
    <>
      <div className="allservices">
        {/* using map method */}

        {fstle.map((item) => {
          {
            /* console.log(barbservices[item.id]); */
          }
          {
            /* const imgurl = `../images/services/${barbservices[item.id]}.png`; */
          }
          const uu = "../images/services/Hair wash.png";
          {
            /* console.log(imgurl); */
          }
          return (
            <>
              <div
                id={barbservices[item.id]}
                className="os"
                onClick={() => {
                  let aee = service;
                  if (service.includes(barbservices[item.id])) {
                    aee = service.filter((ele) => {
                      return ele != barbservices[item.id];
                    });
                    setservice(aee);
                  } else {
                    aee.push(barbservices[item.id]);
                    setservice(aee);
                  }
                  if (
                    document.getElementById(barbservices[item.id]).style
                      .border == "2.4px solid blue"
                  ) {
                    document.getElementById(
                      barbservices[item.id]
                    ).style.border = "1px solid black";
                    document.getElementById(
                      barbservices[item.id]
                    ).style.boxShadow = "none";
                  } else {
                    document.getElementById(
                      barbservices[item.id]
                    ).style.border = "2.4px solid blue";
                    document.getElementById(
                      barbservices[item.id]
                    ).style.boxShadow = "2px 2px 10px #9d9ddb";
                  }

                  let curr = fstle;
                  if (fstle[0].color == "black") {
                    curr[item.id].color = "blue";
                  } else {
                    curr[item.id].color = "black";
                  }
                  sets(curr);
                }}
              >
                {barbservices[item.id] == "Hair cut" && (
                  <img src={haircut}></img>
                )}
                {barbservices[item.id] == "Hair wash" && (
                  <img src={hairwash}></img>
                )}
                {barbservices[item.id] == "Beard Trim" && (
                  <img src={beard}></img>
                )}
                {barbservices[item.id] == "Moustache" && (
                  <img src={moustache}></img>
                )}
                {barbservices[item.id] == "Shape Up" && (
                  <img src={shapeup}></img>
                )}
                {barbservices[item.id] == "Shave" && <img src={shave}></img>}

                {barbservices[item.id] == "Sp. Hair Cut" && (
                  <img src={haircut}></img>
                )}
                {barbservices[item.id] == "Sp. Shave" && (
                  <img src={shave}></img>
                )}
                {barbservices[item.id] == "Massage" && (
                  <img src={massage}></img>
                )}
                <div>
                  <p>{barbservices[item.id]}</p>
                </div>
              </div>
            </>
          );
        })}
        {/* <div
          className="os"
          onClick={() => {
            let aee = service;
            if (service.includes("hair-cut")) {
              aee = service.filter((ele) => {
                return ele != "hair-cut";
              });
              setservice(aee);
            } else {
              aee.push("hair-cut");
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
            <p>Hair-cut</p>
          </div>
        </div>
        <div
          className="os"
          onClick={() => {
            //set services
            let aee = service;
            if (service.includes("hair-wash")) {
              aee = service.filter((ele) => {
                return ele != "hair-wash";
              });
              setservice(aee);
            } else {
              aee.push("hair-wash");
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
            <p>Hair-wash</p>
          </div>
        </div>
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
            <p>Shave</p>
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
            <p>Hair-color</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Line;
