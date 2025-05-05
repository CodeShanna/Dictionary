import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();

    const apiKey = "bfaafcoc80td400cfa803cbf6c5ff69f";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
