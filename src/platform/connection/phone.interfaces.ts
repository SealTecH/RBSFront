export interface PhoneBrandRaw {
  id: string;
  name: string
}

export interface PhoneBrand {
  id: number;
  name: string
}

export interface PhoneDeviceRaw {
  id: string;
  brandId: number;
  name: string;
  picture: string;
  released: number
}

export interface PhoneDevice {
  id: number;
  brandId: number;
  name: string;
  picture: string;
}

export interface Malfunction {
  id: number;
  name: string;
}

export type PhoneBrandTree = Map<number, PhoneDevice[]>;
export enum RepairStatus {
  WaitingRepair= 'WaitingRepair',
  InProgress = 'InProgress',
  WaitingResolution= 'WaitingResolution',
  Done = 'Done'
}
export interface Repair {
  manufacturerId: number | null;
  modelId: number | null;
  malfunctions: number[];
  pass: string | null;
  graphPass: number[];
  cost: number | null;
  comments: string | null;
  repairStartDay: string | null;
  repairEndDay: string | null;
  createDate: number;
  customManufacturer: string | null;
  customModel: string | null;
  customMalfunction: string | null;
  status: RepairStatus
}
