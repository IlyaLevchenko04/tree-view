import React, { useState } from 'react';
import { Branch } from './components/Branch/Branch';
import { DEFAULT_DATA } from '../../constants/defaultData';
import { Tree } from './components/Tree/Tree';

export const TreeView: React.FC = () => {
  const [isTriggerOpen, setIsTriggerOpen] = useState(false);
  const firstDeep = Object.keys(DEFAULT_DATA);
  const idArr: any[] = [];

  for (const key in DEFAULT_DATA) {
    idArr.push(`obj.${key}`);
  }

  console.log(idArr);
  const onTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsTriggerOpen((p) => !p);
  };

  return (
    <div>
      <h2 onClick={onTriggerClick}>Trigger</h2>
      {isTriggerOpen && (
        <Tree data={DEFAULT_DATA}>
          {firstDeep.map((item) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <Branch key={item} id={item} item={DEFAULT_DATA[item]} />
          ))}
        </Tree>
      )}
    </div>
  );
};
