import React from "react";
import ReactDOM from "react-dom";

const jsxheading =(<h1 id="heading" className="head" tabIndex="5">Namaste React From JSX</h1>);

// React Component - Functional
const Title = () => {
    return <h1 className="head"id="heading"tabIndex="10">Namaste React Title Component</h1>
}

// The HeadComponent is with return and is same as HeadComponent2
const HeadComponent = () => {
    return <div id="container">
        <Title />
            <h1 className="head"id="heading"tabIndex="10">Namaste React From React Functional Component</h1>
    </div>;}


// The above is same as this - Shortened syntax
const HeadComponent2 = () => (
    <div id="container">
        <Title />
            <h1 className="head"id="heading"tabIndex="10">Namaste React From React Functional Component</h1>
    </div>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent2 />);
