import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "./styles.css";

function IconButton({ icon, href }) {
  return (
    <a href={href} target="__blank" className="social-link">
      <FontAwesomeIcon icon={["fab", icon]} />
    </a>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hi, my name is Vadym</h1>
      <h2>I'm a software engineer who is passionate about new technologies</h2>
      <div className="socials">
        <IconButton href="https://github.com/pewstiepoll" icon="github" />
        <IconButton
          href="https://www.linkedin.com/in/vadimzelenin/"
          icon="linkedin"
        />
        <IconButton
          href="https://twitter.com/Pewstiepoll"
          icon="twitter-square"
        />
        <IconButton
          href="https://stackoverflow.com/users/4245155/pewstiepoll"
          icon="stack-overflow"
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
