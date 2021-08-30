import React, { useRef } from "react";
import cx from "clsx";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useDeviceCardStyles } from "./DeviceCard.style";
import { DeviceCardProps } from "./DeviceCard.types";
import { ReactComponent as EditIcon } from "../../images/icn-edit.svg";
import { RIEInput } from "riek";

export const DeviceCardComponent = (props: DeviceCardProps) => {
  const classes = useDeviceCardStyles();
  const editableRef = useRef<any>(null);

  return (
    <Card className={cx(classes.card, "")}>
      <CardContent>
        <div className={classes.editIconWrapper}>
          <EditIcon
            onClick={() => {
              editableRef.current.startEditing();
            }}
            className={classes.editIcon}
          />
        </div>
        {props.data.id && (
          <Avatar className={classes.purple + " " + classes.center}>
            {props.data.id}
          </Avatar>
        )}
        <h3 className={classes.heading}>
          <RIEInput
            ref={editableRef}
            value={props.data.name}
            change={(values: { name: string }) => {
              if (props.data.id)
                props.handleOnFocusOut(props.data.id, values.name);
            }}
            propName="name"
            editProps={{ disabled: false }}
          />
        </h3>
        <span className={classes.subheader}>{props.data.type}</span>
      </CardContent>
      <Divider light />
      <Box display={"flex"}>
        <Box py={2} flex={"auto"} className={""}>
          <p className={classes.statLabel}>Created</p>
          <div>
            <div className={classes.statValue}>
              {props.data.created_at && props.data.created_at.split("T")[0]}
            </div>
            <div className={classes.statValue}>
              {props.data.created_at && props.data.created_at.split("T")[1]}
            </div>
          </div>
        </Box>
        <Box py={2} flex={"auto"} className={""}>
          <p className={classes.statLabel}>Updated</p>
          <div>
            <div className={classes.statValue}>
              {props.data.updated_at && props.data.updated_at.split("T")[0]}
            </div>
            <div className={classes.statValue}>
              {props.data.updated_at && props.data.updated_at.split("T")[1]}
            </div>
          </div>
        </Box>
      </Box>
    </Card>
  );
};
