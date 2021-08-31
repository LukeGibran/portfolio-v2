import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ReactGa from 'react-ga'

ReactGa.initialize('UA-206409913-1', [])
ReactDOM.render(<App />, document.getElementById("root"));
