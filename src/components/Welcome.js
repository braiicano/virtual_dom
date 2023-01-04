import { vdom } from "../virtualDom/virtualDom.js";

export function Welcome(props) {
    
  return vdom(
    "div",
    { class: "text-center" },
    vdom(
      "h4",
      { class: "text-success" },
      `Hola ${props ? props.name : "mundo"}`
    )
  );
}

{
  /* <div class="text-center"><h1 class="text-success">Hola {props.name}</h1></div> */
}
