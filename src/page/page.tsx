import React, { FC, useState } from "react";
import { VDom } from "../types";
import { render } from "../render/render";

const Page: FC = () => {
  const [state] = useState<Array<VDom>>([
    {
      type: "div",
      style: {
        width: 100,
        height: 100,
        backgroundColor: "green",
        top:0,
        left:0,
      },
      label: "hello",
      events: {
        onClick: () => {
          alert("clicked!");
        },
      },
    },
    {
      type: "div",
      style: {
        width: 100,
        height: 100,
        background: "blue",
      },
    },
    {
      type: "input",
    },
  ]);
  return <div className="canvas">{state.map((item) => render(item))}</div>;
};

export default Page;
