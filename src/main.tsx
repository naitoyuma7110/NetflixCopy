import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import firebase from "./libs/Firebase";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
