import { render } from "./virtual_dom.js";
import { Container } from "./contentModel.js";

const head = document.head;
const body = document.body;
const css = ["link", { rel: "stylesheet", href: "src/virtualDom/app.css" }];
const createApp = Container([], { id: "app" });
export default function appCreate(id = "app") {
  render(head, css);
  const app = document.getElementById(id);
  if (!app) {
    return render(body, createApp);
  }
  return app;
}
