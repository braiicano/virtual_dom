import { render } from "./virtualDom.js";

export function init(vdom) {
  let css = vdom("link", { rel: "stylesheet", href: "src/components/bw.css" });
  let v = 0;
  const c = vdom("div", { id: "app" });
  const h = document.head;
  const b = document.body;
  if (h.querySelector("link"))
    for (const l of h.querySelectorAll("link")) {
      v = l.href.includes(".css");
      if (v) return;
    }
  else render(h, css);
  if (!b.querySelector("#app")) return render(b, c);
  return b.querySelector("#app");
}
