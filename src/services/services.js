import React from "react";
import "./services.css";
import Line from "./lineofservices";
import { useState } from "react";
import { useEffect } from "react";
import Secline from "./2ndlineofservices";
import { db } from "../DB/salooncrm";

import { query, orderBy, onSnapshot } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";

function Services(props) {
  const [barberservicesavailable, setTasks] = useState({});
  const [flinestyle, setff] = useState([]);

  const [ss, setss] = useState(false);
  const [totser, settot] = useState(undefined);
  const { barberuniqid } = useParams();

  useEffect(() => {
    console.log(barberuniqid);
    //barber id will be fetched from url.
    const barberid = barberuniqid;

    const q = query(collection(db, "profile"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        // console.log(doc.data());
        if (doc.id == barberid) {
          setTasks(doc.data().myservices);
          console.log(doc.data());
          let a = Object.keys(doc.data().myservices).length;
          settot(a);
          setss(true);
        }
      });
    });

    if (barberservicesavailable != {}) {
      let arr = [];
      let id = 0;
      Object.keys(barberservicesavailable).forEach((key) => {
        arr.push({ id: id++ });
      });

      // arr.push({ id: id });

      setff(arr);
    }
  }, [ss, totser]);

  if (
    barberservicesavailable == {} ||
    flinestyle.length == 0 ||
    totser === undefined ||
    flinestyle.length != totser
  ) {
    return (
      <>
        <div className="load">
          <ReactLoading
            className="loadbar"
            type="spokes"
            color="#0000FF"
            height={100}
            width={50}
          />
        </div>
      </>
    );
  }
  // console.log(totser);
  return (
    <>
      <div className="services">
        <h2>Please select service</h2>
        <Line
          fstle={flinestyle}
          sets={setff}
          service={props.service1}
          setservice={props.setservice1}
          barberservices={barberservicesavailable}
        />

        {/* <Line fstle={slinestyle} sets={setss} /> */}
        <div className="bott">
          <hr className="botline" />
        </div>
      </div>
    </>
  );
}

export default Services;
