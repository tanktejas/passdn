import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import Services from "./services/services";
import Form from "./form/form";
import Book from "./Book_slot/book";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./DB/salooncrm";

import { query, orderBy, onSnapshot } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { useParams } from "react-router-dom";

import { doc } from "firebase/firestore";

function App() {
  //for testing
  const [req, setreq] = useState([]);

  const [name, setname] = useState("");
  const [ph, setph] = useState("");
  const [service, setservice] = useState([]);
  const [issubmit, setsubmitted] = useState(false);
  const [objofserviseskeyword, setobjservieskeyword] = useState({});
  const { barberuniqid } = useParams();

  function handlesubmit() {
    setph(ph.trim());

    let objtosend = {};

    service.map((item) => {
      objtosend[`${item}`] = objofserviseskeyword[`${item}`];
    });

    // store data in db
    function fun() {
      //barber id will be fetched from url.
      const barberid = barberuniqid;

      try {
        const add = addDoc(collection(db, "requests", barberid, barberid), {
          accepted: false,
          mobile: ph,
          name: name,
          seen: false,
          services: objtosend,
          timestamp: Date.now().toString(),
        });
        console.log(add);
      } catch (err) {
        alert(err);
      }
    }
    fun();
  }

  //for testing
  useEffect(() => {
    // get data from firestore.
    const q = query(collection(db, "services"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        if (doc.id == "services") {
          setobjservieskeyword(doc.data().services);
          // console.log(objofserviseskeyword);
        }
      });
    });
  }, []);

  return (
    <>
      <div className="main">
        <Navbar />
        <hr />
        <Services service1={service} setservice1={setservice} />
        <Form name={name} setname={setname} ph={ph} setph={setph} />
        <Book
          issubmit={issubmit}
          setsubmitted={setsubmitted}
          handlesubmit={handlesubmit}
        />
      </div>
    </>
  );
}

export default App;
