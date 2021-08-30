import { makeStyles } from "@material-ui/core/styles";
import { green, pink, deepOrange } from "@material-ui/core/colors";

export const useDeviceCardStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  editIconWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  editIcon: {
    width: "1rem",
    cursor: "pointer",
  },
  center: {
    margin: "0 auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
  orange: {
    color: palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: palette.getContrastText("rgb(0, 47, 87)"),
    backgroundColor: "rgb(0, 47, 87)",
  },
  pink: {
    color: palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
}));
