import React, { ReactElement } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useLoaderStyles } from "./loader.style";

interface OwnProps {
  open: boolean;
}

export type Props = OwnProps;

export const Loader: React.FunctionComponent<Props> = (
  props: Props
): ReactElement => {
  const classes = useLoaderStyles(props);
  const { open } = props;
  const { backdrop, spinner } = classes;

  return (
    <Backdrop open={!!open} className={backdrop}>
      <CircularProgress className={spinner} />
    </Backdrop>
  );
};

export default Loader;
