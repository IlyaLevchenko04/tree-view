import { createContext, useContext } from 'react';
// import { Item } from '../../../types/index';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TreeViewNewContextProps {
  id: string;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const TreeViewNewBranchContext = createContext<TreeViewNewContextProps>({
  id: '',
});

export const useTreeViewNewBranchContext = () => {
  const props = useContext(TreeViewNewBranchContext);

  if (!props) {
    throw new Error('No tree-view context provided');
  }

  return props;
};
