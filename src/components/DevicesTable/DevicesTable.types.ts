import { DeviceTypesResponse } from "../../containers/Dashboard/Dashboard.types";

export interface DeviceTableData {
  deviceTypesList: DeviceTypesResponse[];
}

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
}

export type DeviceTableProps = DeviceTableData;
