import { createElement } from "react";
import { VDom } from "../types";

export function render(node: VDom): any {
  let attributes: any = {};
  attributes.style = node.style;
  Object.assign(attributes, { ...node.events, ...node.props });
  return createElement(node.type, attributes, renderChildren(node));
}

/**
 * Decide how to render children
 * @param node Vdom
 */
function renderChildren(node: VDom) {
  if (!node.label && !node.children) return null;
  if (!node.children) return node.label;
  if (!node.label) return generateChildren(node.children);
  return [node.label].concat(generateChildren(node.children));
}

function generateChildren(children: VDom[] | undefined) {
  if (!children) return [];
  return children.map((child) => render(child));
}
