import { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("Opportunity");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }
  function handleImageResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  function search() {
    let apiKey = "bfaafcoc80td400cfa803cbf6c5ff69f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imageApiKey = "bfaafcoc80td400cfa803cbf6c5ff69f";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }
  function load() {
    setLoaded(true);
    search();
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      // First Results is the component name, second is the property name, and third is the data we are requesting, property value
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              label="Search for a word"
              onChange={handleKeywordChange}
              defaultValue={"opportunity"}
            />
            <h5 className="hint">
              Search for a word (e.g. Shallow, Heart, Bottle)
            </h5>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
