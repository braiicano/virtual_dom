import { App } from "./virtualDom/virtual_dom.js";
import { container } from "./App.js";
import {
  Br,
  Container,
  Li,
  Paragraph,
  Subtitle,
  Titles,
  Ul,
} from "./virtualDom/contentModel.js";
// solo texto
const texto = "holamundo";
App(texto);
// print(texto);

// solo etiqueta ej: br
// print(Br);
App(Br);

// etiqueta con texto
const text = Paragraph(texto, { class: "text-center" });
// print(text)
App(text);

// lista
const lista = Ul([Li("texto 1"), Li("texto 2"), Li([Subtitle("subtitulo")])]);
// print(lista);
App(lista);

const cont = Container([Container([Titles(["Titulo"])]), Container([lista])]);
App(cont);
