import React, { useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { List } from '../../../List/List';

import '../../../../App.css';

type Item = {
  title: string;
  data?: Item[];
  value?: string;
};

export const useTree = (data: Item[]) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  const onBranchClick = (e: React.MouseEvent) => {
    const id = e.currentTarget.id;
    setActiveIds((p) => {
      if (p.includes(id)) {
        return p.filter((item) => item !== id);
      }

      return [...p, id];
    });
  };

  function renderList(data: Item, id: string) {
    if (Object.keys(data).includes('value')) {
      return data.value;
    }

    const dataItems = data.data;

    if (!dataItems) {
      return console.error('Your data has problems');
    }

    return (
      <div className="renderListWrapper">
        {dataItems.map((item, idx) => {
          const itemId = `${id}.${item.title}.${idx}`;
          const isOpen = activeIds.includes(itemId);

          return (
            <div key={itemId}>
              <p id={itemId} onClick={onBranchClick} className="renderTitle">
                <CaretDownOutlined
                  className={isOpen ? 'markerActive' : 'marker'}
                />
                {item.title}
              </p>
              <div className={isOpen ? 'openRenderWrapper' : 'renderWrapper'}>
                {renderList(item, itemId) as React.ReactNode}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return {
    List: (
      <List
        data={data}
        renderList={renderList as (data: Item, id: string) => JSX.Element}
      />
    ),
  };
};
