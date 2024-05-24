import React, { useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { List } from '../../../List/List';

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
      return <div style={{ marginLeft: '10px' }}>{data.value}</div>;
    }

    const dataItems = data.data;

    if (!dataItems) {
      return console.error('Your data has problems');
    }

    return (
      <div style={{ marginLeft: '10px' }}>
        {dataItems.map((item: Item, idx: number) => (
          <>
            <p
              key={`${id}.${item.title}.${idx}`}
              id={`${id}.${item.title}.${idx}`}
              onClick={onBranchClick}
            >
              <CaretDownOutlined />
              {item.title}
            </p>
            {activeIds.includes(`${id}.${item.title}.${idx}`) && (
              <p>
                {
                  renderList(
                    item,
                    `${id}.${item.title}.${idx}`,
                  ) as React.ReactNode
                }
              </p>
            )}
          </>
        ))}
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
