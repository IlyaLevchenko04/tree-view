import React from 'react';
import { useTreeViewNewContext } from '../context/TreeViewNewProvider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TreeViewNewListProps extends React.ComponentPropsWithoutRef<'ul'> {}

export const List: React.FC<TreeViewNewListProps> = ({
  children,
  className,
}) => {
  const props = useTreeViewNewContext();

  return <ul className={className}>{children}</ul>;
};
