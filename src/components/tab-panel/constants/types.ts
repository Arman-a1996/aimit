import { ReactNode } from 'react';

export interface ITabPanelProps {
  children?: ReactNode;
  tabs: ITab[];
}

export interface ITab {
  id: string;
  name: string;
}
