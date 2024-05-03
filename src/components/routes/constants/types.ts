import React from 'react';

export interface IRoute {
  Component: React.FC;
  path: string;
  children?: IRoute[];
}
