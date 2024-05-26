import React from 'react';
import { useTreeViewNewContext } from '../context/TreeViewNewProvider';
import { useTreeViewNewBranchContext } from '../context/BranchContext';

export const Controller: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const branchProps = useTreeViewNewBranchContext();
  const props = useTreeViewNewContext();
  return (
    <div
      // eslint-disable-next-line react/prop-types
      onClick={props.onClick}
      id={branchProps.id}
    >
      {children}
    </div>
  );
};
