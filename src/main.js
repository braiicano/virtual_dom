import { main, Welcome, vdom, render } from "./App.js";

// in coments, says complete or not
// render(main,"hola mundo") // render text in main... status: insert text, OK
const h6 = vdom("h6", { style: "color:red" }, "Hello word, from h6"); //create a vdom object element
// render(main, h6); //render h6 in main... status: insert h6 with style attribute, OK

const div = vdom("div", { class: "text-center" }, h6); //create container with class and insert h6 object
// render(main,div); //render main>div>h6... status: insert div with class and h6 object with attributes, OK

const name = "Braiidev"; //create a property with value
render(main,Welcome({name})) //import a function to receive props "name" and render this, OK
