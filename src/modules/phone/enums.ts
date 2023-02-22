export enum PhoneRoutes {
  Repair = 'repair'
}

export enum RepairStatus {
  WaitingRepair = 'WaitingRepair',
  InProgress = 'InProgress',
  WaitingResolution = 'WaitingResolution',
  Done = 'Done'
}

export enum Tables {
  Repairs = 'phone-repairs',
  RepairsHistory = 'repairs-history'
}

export enum HistoryOperationKeys {
  __deletedKeys = '__deletedKeys',
  __newKeys = '__newKeys'
}
