import React from "react";
import ReactDOM from "react-dom";
/**
 * if you want to render the following tags in the page
 * <div id="parent>
 *   <div id="child2">
 *      <h1>I am an H1 Tag!!</h1>
 *      <h2>I am an H12 Tag!!</h2>
 *   </div>
 *   <div id="child2">
 *      <h1>I am an H1 Tag!!</h1>
 *      <h2>I am an H12 Tag!!</h2>
 *   </div>
 * </div>
 */

// // For single element
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an H1 Tag...!!")
//   )
// );

// For nested elements
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },[ 
      React.createElement("h1", {}, "I am an H1 Tag...!!"),
      React.createElement("h2", {}, "I am an H2 Tag...!!")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },[ 
      React.createElement("h1", {}, "I am an H1 Tag...!!"),
      React.createElement("h2", {}, "I am an H2 Tag...!!")
    ]
  ),]
);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",          // appear as a type
//     äbc: "Test Attribute", // appear as props in the react object in console
//   },
//   "Hello World From React!!" // appear as childedn in the react object in console
// );

// check the console to see the heading object
console.log(parent1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1);
