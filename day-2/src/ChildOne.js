import React from "react";
import "./ChildOne.scss";
import style from "./H1.module.css";

function ChildOne() {
  return (
    <>
      <h1 className="H1">Huemen</h1>
      <h1 className={style.H1}>Huemen</h1>
      <h1 className={style.H1}>Huemen</h1>
      <p className="Logo">Harman</p>
    </>
  );
}

export default ChildOne;
