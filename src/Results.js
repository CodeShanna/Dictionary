import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <span className="phonetic">
            Pronunciation:
            <span className="phonetic">{props.results.phonetic} </span>
          </span>
        </section>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return <Meaning meaning={meaning} key={index} />;
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
