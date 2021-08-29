import axios from "axios";
import { APP_DEVICES_API } from "../../constants/app-constants";
import { DeviceResponse } from "./DevicesList.types";

export const DeviceListAPI = {
  getDeviceList: () => {
    const apiPath = `${APP_DEVICES_API}/devices`;
    return axios
      .get(apiPath, {
        headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
      })
      .then((res) => {
        if (!res || !res.data || res.data.length === 0) {
          return;
        }
        return res.data;
      })
      .catch((error) => {});
  },
  editDeviceName: (id: number, deviceName: string) => {
    const apiPath = `${APP_DEVICES_API}/devices/${id}`;
    return axios
      .put(
        apiPath,
        { name: deviceName },
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      )
      .then((res) => {
        if (!res || !res.data) {
          return;
        }
        return { ...res.data };
      })
      .catch((error) => {});
  },
  addNewDevice: (device: DeviceResponse) => {
    const apiPath = `${APP_DEVICES_API}/devices`;
    return axios
      .post(apiPath, device, {
        headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
      })
      .then((res) => {
        if (!res || !res.data) {
          return;
        }
        return { ...res.data };
      })
      .catch((error) => {});
  },
};
