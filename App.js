const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello World From React!"
);

console.log(heading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.append(heading);
root.render(root);
