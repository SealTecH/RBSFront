import { RepairStatus } from './enums';

export interface Repair {
  id: string,
  manufacturerId: number | null;
  modelId: number | null;
  malfunctions: number[];
  pass: string | null;
  graphPass: number[];
  cost: number | null;
  imei: number | null;
  phoneNumber: string | null;
  comments: string | null;
  createDate: number;
  customManufacturer: string | null;
  customModel: string | null;
  customMalfunction: string | null;
  status: RepairStatus;
}

export interface PhoneBrandRaw {
  id: string;
  name: string
}

export interface Manufacturer {
  id: number;
  name: string
}

export interface PhoneDeviceRaw {
  id: number;
  brandId: number;
  name: string;
  picture?: string;
  released?: number;
  aNumber?: string;
}

export interface PhoneDevice {
  id: number;
  brandId: number;
  name: string;
  picture?: string;
  aNumber?: string;
}

export interface Malfunction {
  id: number;
  name: string;
}

export type PhoneBrandTree = Map<number, PhoneDevice[]>;
