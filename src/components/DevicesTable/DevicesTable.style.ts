import { makeStyles } from "@material-ui/core/styles";

export const useDevicesTableStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
  },
  tableHeadCell: {
    backgroundColor: theme.palette.basicColors.white,
    fontFamily: "MulishBold",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "0.2px",
    color: theme.palette.basicColors.santasGray,
    padding: "0 0 12px 32px",
  },
  tableBodyCell: {
    fontFamily: "MulishSemiBold",
    fontStyle: "normal",
    letterSpacing: "0.2px",
    color: theme.palette.basicColors.charade,
    paddingLeft: "32px",
  },
  tableRow: {
    cursor: "pointer",
    "&:hover": {
      background: "rgb(55, 81, 255, 0.04)",
    },
  },
  avatarThumbnail: {
    borderRadius: 50,
    width: "44px",
    height: "44px",
  },
  flex: { display: "flex", alignItems: "center" },
  subHeader: {
    fontFamily: "MulishRegular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.1px",
    color: theme.palette.basicColors.frenchGray,
    marginTop: 4,
  },
  header: {
    fontFamily: "MulishSemiBold",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: theme.palette.basicColors.charade,
  },
  input: {
    marginRight: 0,
  },
  actions: {
    marginLeft: 8,
    marginRight: 30,
    "& > button": {
      padding: 4,
    },
  },
  select: { paddingLeft: 0 },
  caption: {
    fontFamily: "MulishRegular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.3px",
    color: theme.palette.basicColors.santasGray,
  },
  toolbar: {
    height: "72px",
  },
}));
