import { LinkProps } from 'react-router-dom';
import { LinkSizeEnum } from './size.enum';
import { LinkViewEnum } from './view.enum';

export interface LinkAppProps extends LinkProps {
  className?: string;
  view?: LinkViewEnum
  size?: LinkSizeEnum;
}
