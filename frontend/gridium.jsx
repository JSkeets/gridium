import React from "react";
import ReactDOM from "react-dom";
// import configureStore from "./store/store";

// import Root from "./components/root";

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1> TESTING </h1>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root />, document.getElementById("main"));
});
