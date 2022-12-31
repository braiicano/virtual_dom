import appCreate from "./init.js";
import { Container } from "./contentModel.js";
const print = (...e) => console.log(...e);

const app = appCreate("app");
const App = (child, parent = app) => render(child, parent);

function destruct(node) {
  let t = node[0],
    p = node[1],
    c = node[2];
  if (typeof p === "object") {
    if (typeof c === "string") {
      return vdom(t, p, c);
    } else if (typeof c === "object") {
      return vdom(t, p, c);
    } else if (typeof c === "undefined") {
      return vdom(t, p);
    }
  } else {
    return node;
  }
}

function vdom(type, props, children) {
  return {
    type,
    props: props || {},
    children,
  };
}
function snakeToKabebCase(word) {
  word = word.includes("_") ? word.replaceAll("_", "-") : word;
  return word;
}
function propsAdd(props, element) {
  Object.keys(props).forEach((prop) =>
    element.setAttribute(snakeToKabebCase(prop), props[prop])
  );
}

function render(component, node) {
  let element = create(component);
  return node.appendChild(element);
}

function create(component) {
  if (typeof component === "string") {
    return document.createTextNode(component);
  } else if (typeof component === "object") {
    let { type, props, children } = destruct(component);
    let element = document.createElement(type);
    if (props) propsAdd(props, element);
    if (typeof children === "string") {
      render(children, element);
    } else if (typeof children === "object") {
      children.forEach((child) => {
        render(child, element);
      });
    }
    return element;
  }
}
export { App, print, render, create };
