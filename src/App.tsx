import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import RouterComponent from "./router";
import theme from "./theme";
import SideBar from "./components/SideBar";
import { Router } from "react-router-dom";

const App = () => {
  const history = require("history").createBrowserHistory();

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBar />
        <RouterComponent />
      </ThemeProvider>
    </Router>
  );
};

export default App;
