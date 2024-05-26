import React, { useState } from 'react';
import { TreeViewNewContext } from './context/TreeViewNewProvider';
import { List } from './components/TreeViewNewList';
import { ListItem } from './components/TreeViewNewListItem';
import { Item } from '../../types';
import { ItemText } from './components/TreeViewNewItemText';
import { Branch } from './components/TreeViewNewBranch';
import { Controller } from './components/TreeViewNewController';
import { BranchContent } from './components/TreeViewNewBranchContent';
import { Marker } from './components/TreeViewNewMarker';
import { BranchText } from './components/TreeViewNewBranchText';

interface TreeViewNewProps extends React.ComponentPropsWithoutRef<'div'> {
  data: Item[];
}

export const TreeViewNew: React.FC<TreeViewNewProps> = ({
  className,
  children,
  data,
  ...rest
}) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const id = e.currentTarget.id;

    setActiveIds((p) => {
      if (p.includes(id)) {
        return p.filter((item) => item !== id);
      }

      return [...p, id];
    });
  };
  return (
    <TreeViewNewContext.Provider value={{ openIds: activeIds, onClick, data }}>
      <div className={className} {...rest}>
        {children}
      </div>
    </TreeViewNewContext.Provider>
  );
};

const TreeView = Object.assign(TreeViewNew, {
  List: List,
  ListItem: ListItem,
  Text: ItemText,
  Branch: Branch,
  Controller: Controller,
  BranchContent: BranchContent,
  Marker: Marker,
  BranchText: BranchText,
});

export default TreeView;
