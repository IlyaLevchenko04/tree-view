import React, { useState } from 'react';
import { NEW_DEFAULT_DATA } from '../../constants/defaultData';
import { CaretDownOutlined } from '@ant-design/icons';
import { useTree } from './components/useTree/useTree';

type Item = {
  title: string;
  data?: Item[];
  value?: string;
};

export const TreeView: React.FC = () => {
  const [isTriggerOpen, setIsTriggerOpen] = useState('');
  const [activeIds, setActiveIds] = useState<string[]>([]);

  const { List } = useTree(NEW_DEFAULT_DATA);

  const onTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = e.currentTarget.id;

    setIsTriggerOpen((p) => (p === id ? '' : id));
  };

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

    if (!dataItems) return null;

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
              <p>{renderList(item, `${id}.${item.title}.${idx}`)}</p>
            )}
          </>
        ))}
      </div>
    );
  }

  return List;
};
