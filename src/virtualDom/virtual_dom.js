import appCreate from "./init.js";
import { Container } from "./contentModel.js";
const print = (...e) => console.log(...e);

const app = appCreate("app");
const App = (child) => render(app, child);

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

function render(node, component) {
  let element;
  if (typeof component === "string") {
    element = document.createTextNode(component);
    return node.appendChild(element);
  } else if (typeof component === "object") {
    let { type, props, children } = destruct(component);
    element = document.createElement(type);
    if (props) propsAdd(props, element);
    if (typeof children === "string") {
      render(element, children);
    } else if (typeof children === "object") {
      children.forEach((child) => {
        render(element, child);
      });
    }
    return node.appendChild(element);
  }
}

export { App, print, render };
