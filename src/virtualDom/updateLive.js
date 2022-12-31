import { create, print } from "./virtual_dom.js";

export function UpdateElement(parentNode, oldNode, newNode, index = 0) {
  try {
    oldNode = create(oldNode);
    newNode = create(newNode);
  } catch {
    oldNode;
    newNode;
  }
  if (!oldNode) {
    parentNode.appendChild(newNode);
  } else if (!newNode) {
    parentNode.removeChild(parentNode.childNodes[index]);
  } else if (newNode.children) {
    const oldLength = oldNode.children.length;
    const newLength = newNode.children.length;
    for (let i = 0; i < oldLength || i < newLength; i++) {
      UpdateElement(
        parentNode.childNodes[index],
        oldNode.childNodes[i],
        newNode.childNodes[i],
        i
      );
    }
  }
}
