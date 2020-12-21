import React, { FC, useState } from "react";
import {VDom } from "../types";
import { getComponent } from "../render/render";

const Page: FC = () => {
  const [state,] = useState<Array<VDom>>([{
    type:"div",
    style:{
      width:100,
      height:100,
      backgroundColor:"red"
    },
    events:{
      onClick:()=>{alert("clicked!")},
    },
    children:[
      {
        type:"span",
      },
    ],
  }]);
  return (
    <div>
      {state.map((item) => (
        getComponent(item)
      ))}
    </div>
  );
};

export default Page;
