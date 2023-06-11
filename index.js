//import react
import React from "react";

//react-dom provides entry point for the dom and server renderer for React. 
import { ReactDOM } from "react-dom";

import App from "./App";

//This will render the react component App to the Dom, via the target id 'root'
ReactDOM.render(<App />, document.getElementById('root'));
