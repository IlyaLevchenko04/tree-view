import React, { useState } from 'react';
import { Tree } from '../Tree/Tree';

interface IProps {
  id?: any;
  item?: any;
}

export const Branch: React.FC<IProps> = ({ item = ['smth', true, 1], id }) => {
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const onBranchValueClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsBranchOpen((p) => !p);
  };

  return (
    <li id={id}>
      {<p onClick={onBranchValueClick}>{id}</p>}
      {typeof item !== 'object' && isBranchOpen && <p>{item}</p>}
    </li>
  );
};
