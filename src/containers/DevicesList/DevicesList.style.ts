import { makeStyles } from "@material-ui/core/styles";

export const useDevicesListStyle = makeStyles((theme) => ({
  sortIcon: {
    cursor: "pointer",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  buttonHeader: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "1.5rem",
  },
  button: {
    margin: theme.spacing(1),
  },
  devicesContainer: {
    paddingRight: "2rem",
    paddingLeft: "2rem",
    paddingBottom: "2rem",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "255px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  header: {
    display: "flex",
    padding: "36px 33px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "MulishBold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    letterSpacing: "0.3px",
    color: theme.palette.basicColors.charade,
  },
  avatar: {
    border: "1.5px solid #DFE0EB",
    borderRadius: "50px",
    padding: 2,
  },
  paper: {
    background: theme.palette.basicColors.white,
    border: "1px solid #DFE0EB",
    borderRadius: "8px",
    margin: "0px 33px 33px 30px",
    [theme.breakpoints.down("xs")]: {
      margin: "0px 0px 30px 0",
    },
  },
  tableHeader: {
    padding: "19px 19px 45px 32px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  tableTitle: {
    fontFamily: "MulishBold",
    fontStyle: "normal",
    fontSize: "19px",
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: theme.palette.basicColors.charade,
  },
  searchWrapper: {
    display: "flex",
    width: "100%",
  },
  natInputFieldStyle: {
    height: 40,
    width: 197.12,
    padding: 0,
    "& .MuiOutlinedInput-input": {
      padding: "9.42px",
    },
    "& .MuiOutlinedInput-root": {
      height: "100%",
    },
    "& .MuiOutlinedInput-root fieldset": {
      borderColor: "#DFE0EB !important",
    },
    "& .MuiOutlinedInput-root.Mui-focused ": {
      borderColor: "#DFE0EB  !important",
    },
    // "& .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "red",
    // },
    // "& .Mui-focused fieldset": {
    //   borderColor: "red",
    // },
  },
  formControlStyle: {
    "& .MuiFormControl-root": {
      margin: 0,
      height: 40,
      width: 197.12,
    },
  },
  form: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  drawer: {
    width: "545px",
  },
  avatarWrapper: {
    background: theme.palette.basicColors.white,
  },
  selectButtonStyles: {
    background: "#FFFFFF",
    border: "1px solid #DFE0EB",
    boxSizing: "border-box",
    borderRadius: "3px",
    width: "197.12px",
    height: "40px",
    justifyContent: "flex-start",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: "#9FA2B4",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  paperStyle: {
    width: "197.12px",
  },
}));
