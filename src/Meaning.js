import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>
        {" "}
        <strong>Part of Speech: </strong>
        {props.meaning.partOfSpeech}
      </h5>

      <p>
        <strong>Definition: </strong> {props.meaning.definition}
        <br></br>
        <strong>Example(s): </strong>
        <em>{props.meaning.example}</em>
        <br></br>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
