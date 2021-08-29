import { makeStyles } from "@material-ui/core/styles";

export const useSideBarStyle = makeStyles((theme) => ({
  sideBar: {
    width: "255px",
    backgroundColor: theme.palette.basicColors.white,
    position: "fixed",
    height: "100%",
  },
  logo: {
    padding: "1rem 3rem 1rem 1.5rem",
  },
  sideMenuTabsWrapper: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));
