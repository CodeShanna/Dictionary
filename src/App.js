import logo from "./devalot_blue.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by <strong>Shanna Jones.</strong> open sourced on{" "}
          <a
            href="https://github.com/CodeShanna/Dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on
          <a
            href="https://app.netlify.com/teams/codeshanna/sites"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
