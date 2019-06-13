import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Register a service worker for wokring offline
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    console.log("registering the Offline SW...");
    navigator.serviceWorker.register(
      "./offline.js",
      () => {
        console.log("Offline SW has been registered successfully.");
      },
      e => {
        console.error("An error occured while registering Offline SW: ", e);
      }
    );
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
