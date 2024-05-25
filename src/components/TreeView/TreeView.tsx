import React from 'react';
import { NEW_DEFAULT_DATA } from '../../constants/defaultData';
import { useTree } from './components/useTree/useTree';

export const TreeView: React.FC = () => {
  const { List } = useTree(NEW_DEFAULT_DATA);

  return List;
};
