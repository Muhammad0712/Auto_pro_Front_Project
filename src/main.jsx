import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";
import "./main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    
);
