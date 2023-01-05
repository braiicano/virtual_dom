import { modal } from "./components/Modal.js";
import { Welcome } from "./components/Welcome.js";
import { main, render, useState, vdom } from "./virtualDom/virtualDom.js";

export { main, render, vdom };
export { Welcome };

const data = [
  { id: 1, pj: "Lionel Messi", country: "Argentina" },
  { id: 2, pj: "Cristiano Ronaldo", country: "Portugal" },
  { id: 3, pj: "Robert Lewandoski", country: "Poland" },
  { id: 4, pj: "Mohamed Salah", country: "Egypt" },
  { id: 5, pj: "Kylian Mbappe", country: "France" },
  { id: 6, pj: "Erling Haaland", country: "Norway" },
  { id: 7, pj: "Karim Benzema", country: "France" },
  { id: 8, pj: "N'golo Kante", country: "France" },
  { id: 9, pj: "Kevin de Bruyne", country: "Belgium" },
  { id: 10, pj: "Neymar da Silva", country: "Brazil" },
];

export function App() {
  let stateInit = {
    data: data,
    form: {
      id: "",
      pj: "",
      country: "",
    },
    openModal: false,
  };
  const [state, setState] = useState(stateInit);
  const handleChange = (e) => {
    setState({
      form: {
        ...state().form,
        [e.name]: e.value,
      },
    });
  };
  const showModal = () => {
    if (state().openModal) setState({ openModal: false });
    else setState({ openModal: true });
    console.log(state().openModal);
  };
  console.log(modal(state, handleChange));
  return vdom(
    "div",
    {},
    vdom(
      "div",
      { class: "container" },
      vdom(
        "div",
        { class: "d-flex  justify-content-end" },
        vdom(
          "button",
          {
            class: "btn btn-primary my-2",
            onClick: showModal,
          },
          "Insert new player"
        )
      ),
      vdom(
        "table",
        { class: "table table-hover" },
        vdom(
          "thead",
          null,
          vdom(
            "tr",
            null,
            vdom("th", { scope: "col" }, "ID"),
            vdom("th", { scope: "col" }, "Player"),
            vdom("th", { scope: "col" }, "Country"),
            vdom("th", { scope: "col" }, "Actions")
          )
        ),
        vdom(
          "tbody",
          null,
          ...state().data.map((d) =>
            vdom(
              "tr",
              { class: "table-active" },
              vdom("td", null, d.id),
              vdom("td", null, d.pj),
              vdom("td", null, d.country),
              vdom(
                "td",
                null,
                vdom("button", { class: "btn btn-secondary btn-sm" }, "Edit"),
                vdom(
                  "button",
                  { class: "btn btn-danger btn-sm mx-1" },
                  "Delete"
                )
              )
            )
          )
        )
      )
    ),
    modal(state, handleChange)
  );
}
