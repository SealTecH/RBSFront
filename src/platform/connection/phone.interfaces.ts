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
