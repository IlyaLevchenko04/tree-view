import React from 'react';
import { useTreeViewNewContext } from '../context/TreeViewNewProvider';
import { useTreeViewNewBranchContext } from '../context/BranchContext';

export const BranchContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const branchProps = useTreeViewNewBranchContext();
  const props = useTreeViewNewContext();
  return (
    <div
      style={{
        // eslint-disable-next-line react/prop-types
        display: props.openIds.includes(branchProps.id) ? 'block' : 'none',
      }}
    >
      {children}
    </div>
  );
};
