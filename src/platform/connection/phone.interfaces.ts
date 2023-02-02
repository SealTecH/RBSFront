export interface PhoneBrandRaw {
  id: string;
  name: string
}

export interface Manufacturer {
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
