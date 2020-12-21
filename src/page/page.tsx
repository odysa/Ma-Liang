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
      },
      events: {
        onClick: () => {
          alert("clicked!");
        },
      },
      children: [
        {
          type: "span",
          label: "123",
        },
      ],
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
      type:"input",
    }
  ]);
  return (
    <div className="canvas">
      {state.map((item) => (
        <div draggable>{render(item)}</div>
      ))}
    </div>
  );
};

export default Page;
