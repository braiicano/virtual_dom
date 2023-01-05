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
function snakeToKabeb(p) {
  if (p.includes("_")) return p.replaceAll("_", "-");
  return p;
}
function addProps(p, e) {
  //before add props, verify if not is a on function,
  let oP = Object.keys(p);
  if (oP.length) {
    for (const _p of oP) {
      //if (_p.includes("on"))e.addEventListener()//add in another function to add this
      e.setAttribute(snakeToKabeb(_p), p[_p]);
    }
  }
}
function structTypeFunc(p, c) {
  if (c.length) {
    let ls = [];
    for (const _c of c) {
      ls.push(createElement(_c));
    }
    return ls;
  }
}
function createElement(n) {
  if (typeof n === "string" || typeof n === "number") {
    return document.createTextNode(n);
  } else {
    let ls = [];
    let { type: t, props: p, content: c } = n;
    console.log("createElement\n node:", t, p, c); //to delete
    if (t !== "function") {
      let e = document.createElement(t);
      if (p) addProps(p, e);
      if (c.length) {
        for (const _c of c) render(e, _c);
      }
      return e;
    } else {
      ls = structTypeFunc(p, c);
      console.log(n);
      // for (const l of ls) render()
      return ls;
    }
  }
}

export { render, main, virtualDom as vdom };
