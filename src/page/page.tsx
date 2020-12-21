import React, { FC, useState } from "react";
import {ComponentNode } from "../component/component";

const Page: FC = (props) => {
  const [state, setstate] = useState([]);
  return (
    <div>
      {state.map((item) => (
        <ComponentNode {...item} />
      ))}
    </div>
  );
};

export default Page;
