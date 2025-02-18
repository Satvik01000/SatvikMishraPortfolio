import React from "react";
import ReactDOM from "react-dom/client";
import PortfolioHomepage from "./Components/PortfolioHomepage";

const Scripts = ()=>{
    return(
        <PortfolioHomepage/>
    );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Scripts/>)