import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const useTextFieldStyle = makeStyles((theme: Theme) => ({
  FormHelperText: {
    fontSize: 12,
    paddingLeft: 5,
    marginTop: 0,
  },
  FormControlStyle: {
    width: "100%",
  },
}));
