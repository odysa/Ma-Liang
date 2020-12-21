import { CSSProperties, HTMLAttributes } from "react";

export interface VDom {
  type: string;
  children?: VDom[];
  props?: Object;
  style?: CSSProperties;
  events?: HTMLAttributes<HTMLElement>;
  label?:string;
}
