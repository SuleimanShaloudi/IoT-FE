import { makeStyles } from "@material-ui/core/styles";

export const useSideBarActionStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    width: "100%",
    height: "56px",
    cursor: "pointer",
    alignItems: "center",
    paddingLeft: "32px",
    color: theme.palette.basicColors.santasGray2,
  },
  selectedAction: {
    backgroundColor: "rgb(0, 68, 125)",
    color: theme.palette.basicColors.fog,
    "&::before": {
      position: "absolute",
      zIndex: theme.zIndex.modal + 3,
      borderStyle: "solid",
      width: "0",
      content: '""',
      height: "56px",
      left: 0,
      background: theme.palette.basicColors.fog,
      borderWidth: "1.5px",
    },
  },
  actionTitle: {
    marginLeft: 24,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    fontFamily: "MulishRegular",
    "&:hover": {
      color: "silver",
    },
  },
  disabledStyles: {
    pointerEvents: "none",
    color: theme.palette.basicColors.alto,
  },
}));
