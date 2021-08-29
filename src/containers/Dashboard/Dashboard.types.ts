export interface DeviceResponse {
  id?: number;
  name: string;
  created_at?: string;
  updated_at?: string;
  type: string;
  readings?: ReadingResponse[];
}

export interface DeviceTypesResponse {
  deviceType: string;
  total: number;
  percentage: number;
}

export interface DeviceTypesChart {
  title?: string | number;
  color: string;
  value: number;
  key?: string | number;
  [key: string]: any;
}

export interface ReadingResponse {
  unit?: any;
  device_id: number;
  value: any;
  created_at?: string;
  updated_at?: string;
  id: number;
}
