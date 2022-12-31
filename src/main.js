import { App, create } from "./virtualDom/virtual_dom.js";
import { container } from "./App.js";
import {
  Br,
  Button,
  Container,
  Li,
  Paragraph,
  Subtitle,
  Titles,
  Ul,
} from "./virtualDom/contentModel.js";
import { UpdateElement } from "./virtualDom/updateLive.js";
// // solo texto
// const texto = "holamundo";
// App(texto);
// // print(texto);

// // solo etiqueta ej: br
// // print(Br);
// App(Br);

// // etiqueta con texto
// const text = Paragraph(texto, { class: "text-center" });
// // print(text)
// App(text);

// // lista
// const lista = Ul([Li("texto 1"), Li("texto 2"), Li([Subtitle("subtitulo")])]);
// // print(lista);
// App(lista);

// const cont = Container([Container([Titles(["Titulo"])]), Container([lista])]);
// App(cont);
const btn = Button(["Eliminar/Crear nodo"], {
  class: "btn btn-lg btn-primary",
  id: "button",
});

App(btn);

const content = App(Container([], { id: "newdiv" }));
const oldNode = undefined;
const other = Ul([Li(["uno"])], { class: "text-center" });
const newNode = Ul([Li(["uno"]), Li(["dos"])], { class: "text-center" });
UpdateElement(content, oldNode, newNode);

let click = 0;
const btndom = document.getElementById("button");
btndom.addEventListener("click", () => {
  click++;
  click % 2
    ? UpdateElement(content, newNode, other)
    : UpdateElement(content, other, newNode);
});
