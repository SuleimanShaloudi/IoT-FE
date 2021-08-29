import { DeviceResponse } from "../../containers/DevicesList/DevicesList.types";

export interface DeviceCardData {
  data: DeviceResponse;
  handleOnFocusOut: (id: number, name: string) => void;
}
export type DeviceCardProps = DeviceCardData;
