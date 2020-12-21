import { createElement, FC } from "react";
import { CSSProperties, DOMAttributes } from "react";

export interface Component {
  type: string;
  children: Component[];
  props: Object;
  style: CSSProperties;
  events: DOMAttributes<HTMLDivElement>;
}

const ComponentNode: FC<Component> = (myProps) => {
  const { type, children, props, style, events } = myProps;
  Object.assign(props, events, style);
  return (
    <div>
      {createElement(
        type,
        props,
        children.map((item) =>
          children.map((item) => <ComponentNode {...item} />)
        )
      )}
    </div>
  );
};

export { ComponentNode};
