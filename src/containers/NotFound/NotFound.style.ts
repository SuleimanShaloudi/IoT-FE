import { makeStyles } from "@material-ui/core/styles";

export const useNotFoundStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    marginLeft: "255px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
}));
