import { createContext, useContext } from 'react';
import { Item } from '../../../types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TreeViewNewContextProps {
  data: Item[];
  onClick: (e: React.MouseEvent) => void;
  openIds: string[];
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const TreeViewNewContext = createContext<TreeViewNewContextProps>({
  data: [],
  openIds: [],
  onClick: () => '',
});

export const useTreeViewNewContext = () => {
  const props = useContext(TreeViewNewContext);

  return props;
};
