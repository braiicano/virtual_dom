import { vdom } from "../App.js";

export function modal(...props) {
  console.log(props);
  let [state, handleChange] = props;
  console.log(state);
  if (state().openModal)
    return vdom(
      "div",
      { class: "modal", style: "display: initial", id: "insert" },
      vdom(
        "div",
        { class: "modal-dialog", role: "document" },
        vdom(
          "div",
          { class: "modal-content" },
          vdom(
            "div",
            { class: "modal-header" },
            vdom("h5", { class: "modal-title" }, "Insert new player"),
            vdom(
              "button",
              {
                class: "btn-close",
                type: "button",
                data_bs_dismiss: "modal",
                aria_label: "Close",
              },
              vdom("span", { aria_hidden: "true" })
            )
          ),
          vdom(
            "div",
            { class: "modal-body" },
            vdom(
              "form",
              { class: "form-group" },
              vdom(
                "label",
                {
                  class: "form-label mt-4",
                  for: "id",
                },
                "ID:"
              ),
              vdom("input", {
                class: "form-control",
                id: "id",
                name: "id",
                type: "text",
                readonly: "",
                value: state().data.length + 1,
              })
            ),
            vdom(
              "form",
              { class: "form-group" },
              vdom(
                "label",
                {
                  class: "form-label mt-4",
                  for: "pj",
                },
                "Fullname:"
              ),
              vdom("input", {
                class: "form-control",
                id: "pj",
                name: "pj",
                type: "text",
                value: "",
                autofocus: "",
                onChange: handleChange,
              })
            ),
            vdom(
              "form",
              { class: "form-group" },
              vdom(
                "label",
                {
                  class: "form-label mt-4",
                  for: "country",
                },
                "Country:"
              ),
              vdom("input", {
                class: "form-control",
                id: "country",
                name: "country",
                type: "text",
                value: "",
                onChange: handleChange,
              })
            )
          ),
          vdom(
            "div",
            { class: "modal-footer" },
            vdom(
              "button",
              { class: "btn btn-primary", type: "button" },
              "Save changes"
            ),
            vdom(
              "button",
              {
                class: "btn btn-secondary",
                type: "button",
                data_bs_dismiss: "modal",
              },
              "Close"
            )
          )
        )
      )
    );
  return "";
}
