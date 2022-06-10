import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../images/logo (1).png";
import ReactLoading from "react-loading";
import { db } from "../DB/salooncrm";

import { useParams } from "react-router-dom";

import { query, orderBy, onSnapshot } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function Navbar() {
  const [profilepic, setpro] = useState("");
  const [sta, setss] = useState(false);

  const { barberuniqid } = useParams();

  const barberid = barberuniqid;

  useEffect(() => {
    const q = query(collection(db, "profile"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        if (doc.id == barberid) {
          setpro(doc.data().shopImage);
          console.log(doc.data().shopImage);
          setss(true);
        }
      });
    });
  });

  if (sta == false) {
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

  console.log(profilepic);
  return (
    <>
      <div className="nav">
        <div className="left">
          <img src={profilepic == "" ? logo : profilepic} />
        </div>
        <div className="right">
          <h2>Welcome to,</h2>
          <h3>Barber Shop</h3>
        </div>
      </div>
    </>
  );
}

export default Navbar;
