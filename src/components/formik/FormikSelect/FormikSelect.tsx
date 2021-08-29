import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import { useSelectStyle } from "./FormikSelect.style";
import { FormikSelectropsType } from "./FormikSelect.types";

export const FormikSelect = (props: FormikSelectropsType) => {
  const classes = useSelectStyle();
  const { root, popper } = classes;
  const {
    buttonStyles,
    label,
    name,
    options,
    paperStyles,
    setFieldTouched,
    setFieldValue,
  } = props;
  const [open, setOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState(label);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const prevOpen = useRef(open);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleClickItem = (option: { label: string; value: string }) => {
    setButtonLabel(option.label);
    setOpen(false);
    setFieldValue(name, option.value);
    setFieldTouched(name, true, false);
  };

  const handleButtonLabel = () => {
    if (!buttonLabel || buttonLabel === "None") {
      return label;
    }
    return buttonLabel;
  };

  // return focus to the button when we transitioned from !open -> open
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={buttonStyles}
        >
          {handleButtonLabel()}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className={popper}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={paperStyles}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow">
                    {options &&
                      options.map(
                        (
                          option: { label: string; value: string },
                          index: number
                        ) => (
                          <MenuItem
                            onClick={() => handleClickItem(option)}
                            key={index}
                            value={option.value}
                          >
                            {option.label}
                          </MenuItem>
                        )
                      )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};
