import { createElement } from "react";
import { VDom } from "../types";

export function getComponent(node: VDom): any {
  let attributes: any = {};
  attributes.style = node.style;
  Object.assign(attributes, { ...node.events, ...node.props });
  return createElement(node.type, attributes, generateChildren(node.children));
}

function generateChildren(children: VDom[] | undefined) {
  if (!children) return null;
  return children.map((child) => getComponent(child));
}
