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
