import { MouseEventHandler, ReactNode } from 'react';

export interface IComponent {
  [key: string]: ReactNode;
}
export type TClickHandler = MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;

export enum SUBJECT {
  AGENTS = 'Add Agent',
  OFFICES = 'Add Agency',
  BRANCHES = 'Add Branch',
  AUTHORITIES = 'Add Authority',
  CARRIERS = 'Add Carrier',
  CUSTOMERS = 'Add Customer',
  EMPLOYEES = 'Add Employee',
  OFFICE = 'agency',
  FACTORINGCOMPANIES = 'Add Factoring',
  BRANCH = 'branch',
  ARE_YOU_SURE = 'Are You Sure Want Do Delete?',
  DELETE = 'Delete',
  CANCEL = 'Cancel',
  CLOSE = 'Close',
  CHECK_EMAIL = 'Please Check Your Email',
  SOMETHING_WENT_WRONG = 'Something Went Wrong',
}

export enum ProfileTabs {
  offices = 'offices',
  agents = 'agents',
  branches = 'branches',
  authorities = 'authorities',
  customers = 'customers',
  carriers = 'carriers',
  employees = 'employees',
  factoringCompanies = 'factoringCompanies',
}

export enum ProfileActivePages {
  carriers = 'table',
  carriersRequest = 'request',
  carriersBlackList = 'blacklist',
  customers = 'customer-table',
  customersBlackList = 'customer-blacklist',
}

export enum LoadsTabs {
  loads = 'loads',
  newLoad = 'new_load',
}

export enum CreditCheckTabs {
  newCredit = 'new_credit',
  mcCustomers = 'mc_and_customers',
}

export enum ContactTabs {
  contact = 'contact',
}

export enum FactoringTabs {
  billing = 'billing',
  payables = 'payables',
  receivables = 'receivables',
}

export const ProfileAllSubTabs = {
  table: 'carrierTable',
  request: 'carrierRequest',
  blacklist: 'carriersBlackList',
  'customer-table': 'customersTable',
  'customer-blacklist': 'customersBlackList',
};

export const ProfileAllSubTabsReversed = Object.fromEntries(Object.entries(ProfileAllSubTabs).map(el => el.reverse()));
