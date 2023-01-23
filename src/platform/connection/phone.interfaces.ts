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
  brandId: string;
  name: string;
  picture: string;
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
}
