import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { useSideBarActionStyle } from "./SideBarAction.style";
import { SideAction } from "./SideBarAction.types";

const SideBarAction = (props: SideAction) => {
  const classes = useSideBarActionStyle();
  const { Icon, title, handleActionClick, isSelected, disabled } = props;
  const { actionTitle, disabledStyles, selectedAction, wrapper } = classes;
  const handleClickAction = () => {
    handleActionClick(title);
  };

  return (
    <div
      className={clsx(wrapper, {
        [selectedAction]: isSelected,
        [disabledStyles]: disabled,
      })}
      onClick={handleClickAction}
    >
      {Icon}
      <Typography className={actionTitle}>{title}</Typography>
    </div>
  );
};

export default SideBarAction;
