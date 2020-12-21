import { FC } from "react";
import { VDom } from "../types";
interface ComponentProps {
  dom: VDom;
  key:string;
}
const Component: FC<ComponentProps> = (props) => {
  const { children } = props;
  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div draggable className="canvas-item" onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};

export default Component;
