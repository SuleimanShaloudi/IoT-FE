import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const useSelectStyle = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  popper: {
    zIndex: 100,
  },
}));
