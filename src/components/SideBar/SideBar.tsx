import { useState } from "react";
import { Hidden } from "@material-ui/core";
import { Images } from "../../images";
import { useSideBarStyle } from "./SideBar.style";
import { ReactComponent as OverViewIcon } from "../../images/icn-overview.svg";
import { ReactComponent as TicketIcon } from "../../images/icn-ticket.svg";
import SideBarAction from "./SideBarAction/SideBarAction";
import {
  SIDE_BAR_OVERVIEW_ACITON,
  SIDE_BAR_IDEAS_ACTION,
} from "../../constants/sidebar-constants";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  const classes = useSideBarStyle();
  const { logo, sideBar, sideMenuTabsWrapper } = classes;
  const [selectedAction, setSelectedAction] = useState("Overview");
  const history = useHistory();

  const sideBarActions = [
    { title: SIDE_BAR_OVERVIEW_ACITON, icon: <TicketIcon />, disabled: false },
    { title: SIDE_BAR_IDEAS_ACTION, icon: <OverViewIcon />, disabled: false },
  ];

  const handleActionOnClick = (title: string) => {
    setSelectedAction(title);
    if (title === SIDE_BAR_OVERVIEW_ACITON) {
      history.push("/devices");
    } else {
      history.push("/dashboard");
    }
  };

  return (
    <Hidden xsDown>
      <div className={sideBar}>
        <div className={logo}>
          <img src={Images.logo} alt="Mobileye" />
        </div>
        <div className={sideMenuTabsWrapper}>
          {sideBarActions &&
            sideBarActions.length > 0 &&
            sideBarActions.map((action, index) => (
              <SideBarAction
                key={`${action.title}-${index}`}
                title={action.title}
                Icon={action.icon}
                disabled={action.disabled}
                handleActionClick={handleActionOnClick}
                isSelected={action.title === selectedAction}
              />
            ))}
        </div>
      </div>
    </Hidden>
  );
};

export default SideBar;
