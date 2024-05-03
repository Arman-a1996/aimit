export interface IWarningModal {
  opened: boolean;
  title: string;
  content?: string;
  onOk: () => void;
  onCancel: () => void;
  cancelText?: string;
  okText?: string;
  isLoading?: boolean;
  isDrawerClosed?: boolean;
  isDrawerSaved?: boolean;
  cancelButtonVariant?: any | undefined;
  okButtonVariant?: any | undefined;
  isReceive: boolean;
  loadIds: number[] | [];
  showOk?: boolean;
  showCancel?: boolean;
  maskClosable?: true;
  currentClass?: string;
}
