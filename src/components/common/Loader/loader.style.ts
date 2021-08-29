import { makeStyles } from "@material-ui/core/styles";

export const useLoaderStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1111,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "rgba(255, 255, 255, 0.8)",
    background: "rgba(255, 255, 255, 0.8)",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  spinner: {
    transform: "scale(0.5)"
  }
}));
