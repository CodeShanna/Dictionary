import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h5 className="phonetic">{props.results.phonetic}</h5>
        {props.results.meanings.map(function (meaning, index) {
          return <Meaning meaning={meaning} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
