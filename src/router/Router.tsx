import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../components/common/Loader";
import { ROUTES } from "./routes";

const RouterComponent = () => {
  const DeviceList = lazy(() => import("../containers/DevicesList"));
  const Dashboard = lazy(() => import("../containers/Dashboard"));
  const NotFound = lazy(() => import("../containers/NotFound"));

  return (
    <Suspense fallback={<Loader open={true} />}>
      <Switch>
        <Route path={ROUTES.root} exact component={DeviceList} />
        <Route path={ROUTES.DEVICES_LIST} component={DeviceList} />
        <Route path={ROUTES.DEVICES_DASHBOARD} component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default RouterComponent;
