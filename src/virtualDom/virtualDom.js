import { init } from "./init.js";

const main = init(virtualDom);

function virtualDom(type, props, ...content) {
  return {
    type,
    props: props || {},
    content,
  };
}

function render(p, n) {
  let e = createElement(n);
  return p.appendChild(e);
}

function createElement(n) {
  if (typeof n === "string" || typeof n === "number") {
    return document.createTextNode(n);
  } else {
    let { type: t, props: p, content: c } = n;
    console.log(t, p, c); //to delete
    // if()
    let e = document.createElement(t);
  }
}

export { render, main };
