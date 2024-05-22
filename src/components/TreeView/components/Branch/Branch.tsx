import React, { useState } from 'react';
import { Tree } from '../Tree/Tree';
import { useTree } from '../useTree/useTree';

interface IProps {
  id: string;
  item?: any;
}

export const Branch: React.FC<IProps> = ({ item, id }) => {
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  //   const { renderValue } = useTree(item, id);

  const primitivesArray = [null, undefined, '', 0, false];

  const onBranchValueClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsBranchOpen((p) => !p);
  };

  function renderValue(data: any) {
    const isPrimitive = (checkData: any) =>
      typeof checkData !== 'object' || primitivesArray.includes(checkData);

    if (isPrimitive(data)) {
      return <p>{`${data}`}</p>;
    }

    if (Array.isArray(data)) {
      const isArrayOfPrimitives = data.every((dataItem) =>
        isPrimitive(dataItem),
      );

      if (isArrayOfPrimitives) {
        return <p>{`${data}`}</p>;
      }

      return data.map((dataItem) => {
        if (isPrimitive(dataItem)) {
          return <p key={`${id}.${dataItem}`}>{`${dataItem}`}</p>;
        }

        return <ul key={`${id}.${data}`}>{renderValue(dataItem)}</ul>;
      });
    }

    if (typeof data === 'object') {
      const keys = Object.keys(data);

      return keys.map((key) => {
        if (isPrimitive(data[key])) {
          return <p key={`${id}.${key}`}>{`${data[key]}`}</p>;
        }

        return (
          <p key={`${id}.${key}`}>
            {key}: {renderValue(data[key])}
          </p>
        );
      });
    }
  }

  return (
    <li id={id}>
      <p onClick={onBranchValueClick}>{id}</p>
      {isBranchOpen && renderValue(item)}
    </li>
  );
  //   return renderValue(item, id) as any;
};
