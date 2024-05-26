import React from 'react';
import { TreeViewNewBranchContext } from '../context/BranchContext';

export const Branch: React.FC<{ children: React.ReactNode; id: string }> = ({
  children,
  id,
}) => {
  return (
    <TreeViewNewBranchContext.Provider value={{ id }}>
      <div>{children}</div>
    </TreeViewNewBranchContext.Provider>
  );
};
