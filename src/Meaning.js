import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="posFormat"> {props.meaning.partOfSpeech}</div>

      <div className="definition">
        <div className="definitionLabel">Definition: </div>{" "}
        <div className="definitionFormat">{props.meaning.definition}</div>
        <span className="example">Example: </span>
        <span className="example">{props.meaning.example}</span>
        <br></br>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
