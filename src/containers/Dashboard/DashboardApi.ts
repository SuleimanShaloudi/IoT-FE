import axios from "axios";
import { APP_DEVICES_API } from "../../constants/app-constants";
import { DeviceResponse, ReadingResponse } from "./Dashboard.types";

export const DashboardAPI = {
  getDeviceList: () => {
    const apiPath = `${APP_DEVICES_API}/devices`;
    return axios
      .get(apiPath, {
        headers: { crossdomain: "true" },
      })
      .then((res) => {
        if (!res || !res.data || res.data.length === 0) {
          return;
        }
        return res.data;
      })
      .catch((error) => {});
  },
  getPercentages: () => {
    const apiPath = `${APP_DEVICES_API}/devices`;
    return axios
      .get(apiPath, {
        headers: { crossdomain: "true" },
      })
      .then((res) => {
        if (!res || !res.data || res.data.length === 0) {
          return;
        }
        const numberOfDevices = res.data.length;
        let deviceTypesMap: Map<string, number> = new Map();
        res.data.forEach((device: DeviceResponse) => {
          const count = deviceTypesMap.get(device.type);
          if (count) {
            deviceTypesMap.set(device.type, count + 1);
          } else {
            deviceTypesMap.set(device.type, 1);
          }
        });
        return { totalNumberOfDevices: numberOfDevices, deviceTypesMap };
      })
      .catch((error) => {});
  },
  getDevicesReadings: async () => {
    const apiPath = `${APP_DEVICES_API}/devices`;
    const apiPath2 = `${APP_DEVICES_API}/readings`;

    const devices: DeviceResponse[] = await axios
      .get(apiPath, {
        headers: { crossdomain: "true" },
      })
      .then((res) => {
        if (!res || !res.data || res.data.length === 0) {
          return;
        }
        return res.data;
      })
      .catch((error) => {});
    const readings: ReadingResponse[] = await axios
      .get(apiPath2, {
        headers: { crossdomain: "true" },
      })
      .then((res) => {
        if (!res || !res.data || res.data.length === 0) {
          return;
        }
        return res.data;
      })
      .catch((error) => {});
    if (devices && readings) {
      let readingMap: Map<number, ReadingResponse[]> = new Map();
      readings.forEach((reading) => {
        const deviceReadings = readingMap.get(reading.device_id);
        if (deviceReadings) {
          readingMap.set(reading.device_id, [...deviceReadings, reading]);
        } else {
          readingMap.set(reading.device_id, [reading]);
        }
      });
      devices.forEach((device) => {
        if (device.id) {
          const deviceReadings = readingMap.get(device.id);
          if (deviceReadings) {
            return (device.readings = deviceReadings);
          }
          return device;
        }
      });
    }
    return devices;
  },
  getReadingByDeviceId: (id: number) => {
    const apiPath = `${APP_DEVICES_API}/devices/${id}/readings`;
    return axios
      .get(apiPath, {
        headers: { crossdomain: "true" },
      })
      .then((res) => {
        if (!res || !res.data || res.data.length === 0) {
          return;
        }

        return res.data;
      })
      .catch((error) => {});
  },
};
