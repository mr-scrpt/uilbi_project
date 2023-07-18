import { HTMLAttributes } from 'react';

export interface SidebarProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  toggleHandler?: ()=> void;
}
