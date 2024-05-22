import React from 'react';
import { JustText } from '../Branch/JustText';

const primitivesArray = [null, undefined, '', 0, false];

const isPrimitive = (checkData: any) =>
  typeof checkData !== 'object' || primitivesArray.includes(checkData);

function renderValue(data: any, id: string) {
  const isPrimitive = (checkData: any) =>
    typeof checkData !== 'object' || primitivesArray.includes(checkData);

  if (isPrimitive(data)) {
    // return <Branch item={data} id={`${id}.${data}`} />;
    return <p>{`${data}`}</p>;
  }

  if (Array.isArray(data)) {
    const isArrayOfPrimitives = data.every((dataItem) => isPrimitive(dataItem));

    if (isArrayOfPrimitives) {
      return <p>{`${data}`}</p>;
    }

    return data.map((dataItem) => {
      if (isPrimitive(dataItem)) {
        return <p key={`${id}.${dataItem}`}>{`${dataItem}`}</p>;
      }

      return (
        <ul key={`${id}.${data}`}>{renderValue(dataItem, `${id}.${data}`)}</ul>
      );
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
          {key}: {renderValue(data[key], `${id}.${key}`)}
        </p>
      );
    });
  }
}

export const useTree = (data: any, id: string) => {
  return {
    renderValue: renderValue,
  };
};
