import React from 'react';
import { useTreeViewNewContext } from '../context/TreeViewNewProvider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  id,
}) => {
  const props = useTreeViewNewContext();

  return (
    <li className={className} id={id}>
      {children}
    </li>
  );
};
