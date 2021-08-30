import React, { BaseSyntheticEvent, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { Typography, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SortIcon from "@material-ui/icons/Sort";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { useDevicesListStyle } from "./DevicesList.style";
import FormikTextField from "../../components/formik/FormikTextField";
import FormikSelect from "../../components/formik/FormikSelect";
import { DeviceListAPI } from "./DevicesListApi";
import DeviceCardComponent from "../../components/DeviceCard";
import Grid from "@material-ui/core/Grid";

import AutoSave from "../../components/AutoSubmit";
import { DeviceResponse } from "./DevicesList.types";
import { DEVICES_LIST_PAGE_HEADER } from "../../constants/devices-list.constants";

const DevicesList = () => {
  const classes = useDevicesListStyle();
  const {
    container,
    form,
    formControlStyle,
    selectButtonStyles,
    header,
    buttonHeader,
    natInputFieldStyle,
    paper,
    searchWrapper,
    tableHeader,
    title,
    paperStyle,
  } = classes;

  const [deviceList, setDeviceList] = useState<DeviceResponse[]>([]);
  const [showndeviceList, setShownDeviceList] = useState<DeviceResponse[]>([]);

  const [isDevicesSorted, setDevicesSorted] = useState(false);

  const deviceNameFieldRef = useRef("");
  const deviceTypeFieldRef = useRef("");

  const initialValues = { deviceType: "", deviceName: "" };

  // Modal vars
  const [isAddDeviceModalOpen, setAddDeviceModalOpen] = useState(false);
  const [newDeviceModal, setNewDeviceModa] = useState<DeviceResponse>({
    name: "",
    type: "",
  });

  const openAddDeviceModal = () => {
    setAddDeviceModalOpen(true);
  };

  const closeAddDeviceModal = () => {
    setNewDeviceModa({ name: "", type: "" });
    setAddDeviceModalOpen(false);
  };

  const getDeviceListApi = async () => {
    const deviceList = await DeviceListAPI.getDeviceList();
    await setDeviceList(deviceList);
    await setShownDeviceList(deviceList);
  };

  const handleSubmit = async (values: {
    deviceName: string;
    deviceType: string;
  }) => {
    await getDeviceListApi();
    if (values.deviceType && !values.deviceName) {
      const result = deviceList.filter(
        (device) => device.type === values.deviceType
      );
      await setShownDeviceList(result);
    } else if (values.deviceName && !values.deviceType) {
      const result = showndeviceList.filter(
        (device) =>
          device.name.toLowerCase().indexOf(values.deviceName.toLowerCase()) !==
          -1
      );
      await setShownDeviceList(result);
    } else if (values.deviceName && values.deviceType) {
      const result = deviceList.filter(
        (device) =>
          device.name.toLowerCase().indexOf(values.deviceName.toLowerCase()) !==
          -1 && device.type === values.deviceType
      );
      await setShownDeviceList(result);
    }

    deviceNameFieldRef.current = values.deviceName;
    deviceTypeFieldRef.current = values.deviceType;
  };

  const options = [
    { label: "None", value: "" },
    { label: "HR Sensor", value: "HR_SENSOR" },
    { label: "light Sensor", value: "LIGHT_SENSOR" },
    { label: "Color Sensor", value: "COLOR_SENSOR" },
    { label: "Temp Sensor", value: "TEMPERATURE_SENSOR" },
    { label: "Gas Sensor", value: "GAS_SENSOR" },
    { label: "Humidity Sensor", value: "HUMIDITY_SENSOR" },
    { label: "Pressure Sensor", value: "PRESSURE_SENSOR" },
  ];

  const handleEditDeviceName = async (deviceId: number, deviceName: string) => {
    const editedDevice = await DeviceListAPI.editDeviceName(
      deviceId,
      deviceName
    );
    const indexOfItemInArray = showndeviceList.findIndex(
      (device) => device.id === editedDevice.id
    );
    showndeviceList.splice(indexOfItemInArray, 1, editedDevice);
    await setShownDeviceList(showndeviceList);
    debugger;
    const indexOfItemInOriginalArray = deviceList.findIndex(
      (device) => device.id === editedDevice.id
    );
    deviceList.splice(indexOfItemInOriginalArray, 1, editedDevice);
  };

  const clearFilterAndSearchValues = () => {
    setShownDeviceList(deviceList);

    //TODO: Clean search and filter components
  };

  const sortDevices = () => {
    isDevicesSorted
      ? setShownDeviceList(
        showndeviceList.sort((a: DeviceResponse, b: DeviceResponse) =>
          b.name.localeCompare(a.name)
        )
      )
      : showndeviceList.sort((a: DeviceResponse, b: DeviceResponse) =>
        a.name.localeCompare(b.name)
      );

    setDevicesSorted(!isDevicesSorted);
  };

  return (
    <div className={container}>
      <div className={header}>
        <Typography className={title}>
          {DEVICES_LIST_PAGE_HEADER}{" "}
          <SortIcon
            className={classes.sortIcon}
            onClick={() => {
              sortDevices();
            }}
          />
        </Typography>
        <div className={buttonHeader}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={openAddDeviceModal}
            startIcon={<AddIcon />}
          >
            Add Device
          </Button>
          <Dialog
            open={isAddDeviceModalOpen}
            onClose={closeAddDeviceModal}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle>Add New Device</DialogTitle>

            <DialogContent className={classes.dialogContent}>
              <Formik
                initialValues={{ type: "", name: "" }}
                onSubmit={async (values) => {
                  const addedDevice = await DeviceListAPI.addNewDevice(values);
                  deviceList.push(addedDevice);
                  setAddDeviceModalOpen(false);
                  clearFilterAndSearchValues();
                }}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleSubmit,
                    handleReset,
                    handleChange,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <FormControl className={classes.formControl}>
                        <TextField
                          required
                          autoFocus
                          margin="dense"
                          id="name"
                          label="Device Name"
                          value={values.name}
                          onChange={handleChange}
                          helperText={
                            errors.name && touched.name && errors.name
                          }
                          fullWidth
                        />
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">
                          Device Type
                        </InputLabel>
                        <Select
                          required
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={values?.type}
                          onChange={(e: BaseSyntheticEvent) => {
                            values.type = e.target.value;
                            setNewDeviceModa({
                              name: newDeviceModal.name,
                              type: e.target.value,
                            });
                          }}
                        >
                          {options &&
                            options.length &&
                            options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                      <DialogActions>
                        <Button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reset
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          Submit
                        </Button>
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className={paper}>
        <div className={tableHeader}>
          <Hidden xsDown>
            <div className={searchWrapper}>
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({
                  values,
                  setFieldValue,
                  setFieldTouched,
                  errors,
                }): React.ReactNode => {
                  return (
                    <Form className={form}>
                      <AutoSave debounceMs={300} />
                      <FormikTextField
                        FormControlStyle={formControlStyle}
                        name={"deviceName"}
                        value={values.deviceName}
                        autoComplete={"deviceName"}
                        margin={"normal"}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        className={natInputFieldStyle}
                        placeholder={"Device Name"}
                        error={errors["deviceName"]}
                      />
                      <FormikSelect
                        buttonStyles={selectButtonStyles}
                        label={"Device Type"}
                        paperStyles={paperStyle}
                        name={"deviceType"}
                        options={options}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        error={errors["deviceType"]}
                      />
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Hidden>
        </div>
        <div className={classes.devicesContainer}>
          {showndeviceList && showndeviceList.length && (
            <React.Fragment>
              <Grid container spacing={4}>
                {showndeviceList.map((device, index) => {
                  return (
                    <Grid key={index} item sm={12} md={6} lg={3}>
                      <DeviceCardComponent
                        data={device}
                        handleOnFocusOut={handleEditDeviceName}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevicesList;
