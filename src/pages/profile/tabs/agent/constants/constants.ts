export enum SUBJECT {
  ADD_AGENT = 'Add New Agent',
  EDIT_AGENT = 'Edit Agent',
  BTN_TEXT = 'Add Agent',
  EDIT_BTN_TEXT = 'Save Changes',
  UNSAVED_CHANGES = 'You have unsaved changes',
  CLOSE = 'Close',
  SAVE = 'Save',
  EDIT = 'Edit',
  AGENT_INFO = 'Agent Info',
  ADDITIONAL = 'Additional',
  DATE = 'Date',
  AGENT_ID = 'Agent ID',
  FIRST_NAME = 'First Name',
  NAME = 'Name',
  LAST_NAME = 'Last Name',
  PHONE_NUMBER = 'Phone Number',
  RELATION = 'Relation',
  EMERGENCY_CONTACT = 'Emergency Contact',
  SECOND_NUMBER = 'Second Number',
  ADDRESS = 'Address',
  SECOND_ADDRESS = 'Second Address',
  CITY = 'City',
  STATE = 'State',
  ZIP_CODE = 'Zip Code',
  ACTIVITY = 'Activity',
  RESET_PASSWORD = 'Reset Password',
  TERMINATE_AGENT = 'Terminate Agent',
  AGENT = 'Agent',
  BRACKED = 'Bracket',
  ADD_BRACKED = 'Add Bracket',
  AGENT_TYPE = 'Agent Type',
  USERNAME = 'Username',
  EMAIL = 'Email',
  OFFICE = 'Agency',
  BRANCH = 'Branch',
  LOCATION = 'Location',
  PAYROLL = 'Payroll',
  PAY_TYPE = 'Pay Type',
  PAID_AS = 'Paid As',
  AGENT_PAY_TYPE = 'Agent Pay Type',
  SSN_NUMBER = 'SSN Number',
  EIN_NUMBER = 'EIN Number',
  INPUT_SSN_NUMBERS = 'Input SSN Numbers Formatted Only To Numbers',
  PERSONAL_INFO = 'Personal Information',
  AGENT_MANAGMENT = 'Agent Management',
  ADD_AUTHORITIES = 'Add Authorities',
  PERCENT = 'Percent',
  FROM = 'From',
  TO = 'To',
  ADD = 'Add',
  INPUT_SSN = 'Input SSN Numbers Formatted Only To Numbers',
  INPUT_EIN = 'Input EIN Numbers Formatted Only To Numbers',
  OWNER = 'Owner',
  MANAGER = 'Manager',
  SSN = 'SSN',
  EIN = 'EIN',
  ADDED = 'Added',
  AGENTS_LIST_IS_EMPTY = 'Agent List Is Empty',
  RESET_ALL = 'Reset All',
  NOT_SELECTED = 'Not Selected',
  SEARCH_SELECT = 'Search Select',
  ADD_AUTHORITIES_BTN = 'Add Authorities',
  ALL_USER = 'All user',
  ACTIVE_USERS = 'Active',
  PASSIVE = 'Offline',
  NO = 'No',
  YES = 'Yes',
  CHECKED_ACTIVATE = 'If Activated, The User Can Login Again',
  CHECKED_DEACTIVATE = "If Terminated, user Can't Login",
  ARE_YOU_SURE = 'Are You Sure Want Do Delete?',
  DELETE = 'Delete',
  STAY_HERE = 'Stay Here',
  ALL = 'All',
  ALLOWED_FORMAT = 'Allowed Format (jpeg, pdf, tiff, png)',
  UPLOAD = 'Drag And Drop Or',
  UPLOAD_FILE = 'Upload File',
  USERNAME_EXISTS = 'This Username Already Exists',
  AUTHORITIES = 'Authorities',
  FILE = 'File',
  SOMETHING_WENT_WRONG = 'Something Went Wrong',
  RESET = 'Reset',
  STATUS = 'Status',
  INVITATION = 'Invitation',
  ACCEPTED = 'Accepted',
  INVITE_AGAIN = 'Invite Again',
  ADDED_BY = 'Added By',
  SUCCESSFULLY_ACTIVATED = 'Successfully Activated',
  SUCCESSFULLY_DEACTIVATED = 'Successfully Deactivated',
  FULL_INFO = 'Full Info',
}

export const defaultValues: any = {
  first_name: '',
  last_name: '',
  phone_number: null,
  second_number: null,
  address: '',
  secondAddress: '',
  city: '',
  state: '',
  zip_code: '',
  email: '',
  user_name: '',
  office: [],
  branch: [],
  location: '',
  agentType: '',
  authorities: [],
  pay_type: '',
  paid_as: '',
  agent_pay_type: '',
  ssn_ein_number: '',
  file: [],
  brackeds: [],
  emergencyName: '',
  emergencyPhone: null,
  emergencyRelation: '',
};

export const defaultBrackedValues = {
  percent: null,
  from: 0,
  to: null,
};

export enum VALIDATION_MESSAGES {
  MIN_OPTION = 'At least one option is required',
  POSITIVE = 'Please enter a positive number',
  INTEGER = 'Please enter an integer',
  MIN_NUMBER = 'Number must be greater than or equal to 0',
  VALID_NUMBER = 'Please enter a valid number',
  PHONE = 'Incorrect phone format',
}

export const DEFAULT_AGENT_TYPE_OPTIONS = [
  { title: 'Agent', value: '3' },
  { title: 'Manager', value: '2' },
  { title: 'Owner', value: '1' },
];

export const DEFAULT_PAY_TYPE_OPTIONS = [
  { title: 'Ach', value: '1' },
  { title: 'Check', value: '2' },
];

export const DEFAULT_AGENY_PAY_TYPE = [
  { title: 'SSN', value: '1' },
  { title: 'EIN', value: '2' },
];

export const DEFAULT_PAID_AS = [
  { title: 'Individual', value: '1' },
  { title: 'Corporation', value: '2' },
];

export const filterDefaultValues = {
  office_filter: '',
  branch_filter: '',
  agent_type_filter: null,
};

export const officeFilterDefaultOptions = [
  { title: 'Ach', value: 'Ach' },
  { title: 'Check', value: 'Check' },
];
export const branchFilterDefaultOptions = [
  { title: 'Ach', value: 'Ach' },
  { title: 'Check', value: 'Check' },
];
export const agentFilterDefaultOptions = [
  { title: 'Ach', value: 'Ach' },
  { title: 'Check', value: 'Check' },
];

export const AgentFilterValues: any = {
  office_filter: 'agencyId',
  branch_filter: 'branchId',
  agent_type_filter: 'type',
};
