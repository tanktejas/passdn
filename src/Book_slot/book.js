import React from "react";
import "./book.css";

function Slider({ issubmit, setsubmitted, handlesubmit }) {
  return (
    <>
      <div className="book_">
        <button
          onClick={() => {
            handlesubmit();
          }}
        >
          Turn Book
        </button>
      </div>
    </>
  );
}

export default Slider;
