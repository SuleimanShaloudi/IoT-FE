import { FunctionComponent, SVGProps } from "react";

export interface SideActionProps {
  title: string;
  Icon: JSX.Element;
  handleActionClick: (string: string) => void;
  isSelected: boolean;
  disabled: boolean;
}

export type SideAction = SideActionProps;
