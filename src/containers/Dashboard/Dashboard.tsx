import React, { Fragment, useEffect, useRef, useState } from "react";

import { useDashboardStyle } from "./Dashboard.style";
import { DashboardAPI } from "./DashboardApi";
import {
  DeviceResponse,
  DeviceTypesChart,
  DeviceTypesResponse,
  ReadingResponse,
} from "./Dashboard.types";

import { Form, Formik } from "formik";
import { Typography, Hidden, Card, CardContent, Grid } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import FormikTextField from "../../components/formik/FormikTextField";
import FormikSelect from "../../components/formik/FormikSelect";
import DevicesTable from "../../components/DevicesTable";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AutoSave from "../../components/AutoSubmit";
import { DEVICES_LIST_PAGE_HEADER } from "../../constants/devices-list.constants";
import { PieChart } from "react-minimal-pie-chart";
import { DEVICE_TYPES } from "../../constants/dashboard.constants";

import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded";
import LineChart from "../../components/LineChart/LineChart";

const Dashboard = () => {
  const classes = useDashboardStyle();
  const {
    deviceTable,
    tableContainer,
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

  const pieChartColors = [
    "#E38627",
    "#C13C37",
    "#6A2135",
    "#04C1F7",
    "#CDD8E3",
    "#044C84",
    "#C24A37",
  ];

  const [deviceList, setDeviceList] = useState<DeviceResponse[]>([]);
  const [showndeviceList, setShownDeviceList] = useState<DeviceResponse[]>([]);

  const [deviceWithReadingsList, setDeviceWithReadingsList] = useState<
    DeviceResponse[]
  >([]);

  const [deviceTypesList, setDeviceTypesList] = useState<DeviceTypesResponse[]>(
    []
  );
  const [deviceTypesChart, setDeviceTypesChart] = useState<DeviceTypesChart[]>(
    []
  );

  const initialValues = { deviceType: "", deviceName: "" };

  const deviceNameFieldRef = useRef("");
  const deviceTypeFieldRef = useRef("");

  const getDeviceListApi = async () => {
    const deviceList = await DashboardAPI.getDeviceList();
    await setDeviceList(deviceList);
    await setShownDeviceList(deviceList);
  };

  const getDeviceTypesMap = async () => {
    const response = await DashboardAPI.getPercentages();
    if (response) {
      constructDeviceTypeTableAndPieChartList(
        response.totalNumberOfDevices,
        response.deviceTypesMap
      );
    }
  };

  const getDevicesReadings = async () => {
    const response = await DashboardAPI.getDevicesReadings();
    if (response) {
      await setDeviceWithReadingsList(response);
    }
  };

  const constructDeviceTypeTableAndPieChartList = async (
    total: number,
    deviceTypesMap: Map<string, number>
  ) => {
    let deviceTypesList: DeviceTypesResponse[] = [];
    let deviceTypesChart: DeviceTypesChart[] = [];

    let i = 0;
    deviceTypesMap.forEach((value: number, key: string) => {
      deviceTypesList.push({
        deviceType: key,
        total: value,
        percentage: (value / total) * 100,
      });

      deviceTypesChart.push({
        title: key,
        value: value,
        color: pieChartColors[i],
      });

      i++;
    });
    await setDeviceTypesList(deviceTypesList);
    await setDeviceTypesChart(deviceTypesChart);
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

  useEffect(() => {
    getDeviceTypesMap();
    getDevicesReadings();
  }, []);

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

  const getDeviceReadingsNumbers = (readings: ReadingResponse[]) => {
    console.log(readings.map((reading) => Number(reading.value)));

    return readings.map((reading) => Number(reading.value));
  };

  return (
    <div className={container}>
      <div className={header}>
        <Typography className={title}>{DEVICES_LIST_PAGE_HEADER} </Typography>
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
        <div className={classes.tableContainer}>
          <Accordion style={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography> Device Types Statistics</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.deviceTable}>
                <DevicesTable deviceTypesList={deviceTypesList} />
              </div>
              <PieChart
                label={(data) => data.dataEntry.percentage.toFixed(2)}
                labelPosition={65}
                labelStyle={{
                  fontSize: "0.2rem",
                  filter: "invert(1)",
                }}
                radius={40}
                data={deviceTypesChart}
              />
            </AccordionDetails>
          </Accordion>

          <React.Fragment>
            <Grid container spacing={4}>
              {deviceWithReadingsList &&
                deviceWithReadingsList.length &&
                deviceWithReadingsList.map((e, index) => {
                  console.log(e.type);

                  switch (e.type) {
                    case DEVICE_TYPES.LIGHT_SENSOR:
                      if (e.readings) {
                        return (
                          <Grid key={index} item sm={12} md={6} lg={3}>
                            <Card>
                              <CardContent style={{ textAlign: "center" }}>
                                {e.readings[0].value !== "0" ? (
                                  <EmojiObjectsRoundedIcon
                                    style={{
                                      color: "yellowgreen",
                                      fontSize: "10rem",
                                    }}
                                  />
                                ) : (
                                  <EmojiObjectsRoundedIcon
                                    style={{ color: "grey", fontSize: "10rem" }}
                                  />
                                )}
                                <Typography variant="body2" component="p">
                                  {e.name}
                                  <br />
                                  {e.type}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        );
                      }
                      break;
                    case DEVICE_TYPES.COLOR_SENSOR:
                      if (e.readings) {
                        return (
                          <Grid key={index} item sm={12} md={6} lg={3}>
                            <Card>
                              <CardContent style={{ textAlign: "center" }}>
                                <EmojiObjectsRoundedIcon
                                  style={{
                                    color: `#${e.readings[0].value.substring(
                                      2
                                    )}`,
                                    fontSize: "10rem",
                                  }}
                                />
                                <Typography variant="body2" component="p">
                                  {e.name}
                                  <br />
                                  {e.type}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        );
                      }
                      break;
                    case DEVICE_TYPES.GAS_SENSOR:
                      if (e.readings) {
                        return (
                          <Grid key={index} item sm={12} md={6} lg={3}>
                            <Card>
                              <CardContent style={{ textAlign: "center" }}>
                                <LineChart
                                  data={getDeviceReadingsNumbers(e.readings)}
                                  label={e.name}
                                />
                              </CardContent>
                            </Card>
                          </Grid>
                        );
                      }
                      break;
                    default:
                      break;
                  }
                })}
            </Grid>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
