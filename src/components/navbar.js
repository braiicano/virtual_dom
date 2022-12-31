import {
  Container,
  Titles,
  Navbar,
  Link,
  Button,
} from "../virtualDom/contentModel.js";

// class renderNavbar {
//   constructor(components) {
//     this.components = components;
//   }
//   navbar() {
//     const div = (content, props = {}) => Container(content, props);
//     const cansionero = div(Titles(this.components, { class: "text-center" }));
//     const navbar = Navbar(cansionero, { class: "bg-dark" });
//     return navbar;
//   }
// }button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"
const title = Link("Cansionero", { class: "navbar-brand", href: "/" });
const btn = Button("...", {
  class: "navbar-toggler",
  type: "button",
  data_bs_toggle: "collapse",
  data_bs_target: "#navbarColor02",
  aria_controls: "navbarColor02",
  aria_expanded: "false",
  aria_label: "Toggle navigation",
});

export function renderNavbar() {
  const navbar = Navbar(
    Container([title, title], { class: "container-fluid" }),
    {
      class: "navbar navbar-expand-lg navbar-dark bg-dark",
    }
  );
  return navbar;
}
