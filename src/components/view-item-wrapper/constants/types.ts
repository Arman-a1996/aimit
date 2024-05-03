export interface IViewItem {
  title: string;
  children: React.ReactNode;
  Component?: React.ReactNode;
  id?: string;
  className?: string;
  required?: boolean;
  canceledBlock?: boolean;
  copyValue?: string | number;
}
