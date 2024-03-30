const heading = React.createElement(
  "h1",
  {
    id: "heading",          // appear as a type
    äbc: "Test Attribute", // appear as props in the react object in console
  },
  "Hello World From React!!" // appear as childedn in the react object in console
);

// check the console to see the heading object
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
