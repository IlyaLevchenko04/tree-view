import React, { useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';

import '../../App.css';

type Item = {
  title: string;
  data?: Item[];
  value?: string;
};

interface IProps {
  data: Item[];
  renderList: (data: Item, id: string) => JSX.Element;
  Marker?: React.FC<{ className?: string }>;
}

export const List: React.FC<IProps> = ({
  data,
  renderList,
  Marker = CaretDownOutlined,
}) => {
  const [isTriggerOpen, setIsTriggerOpen] = useState('');

  const onTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    setIsTriggerOpen((p) => (p === id ? '' : id));
  };

  return (
    <div className="root">
      {data.map((item, idx) => {
        const itemId = `${item.title}.${idx}`;
        const isOpen = isTriggerOpen === itemId;

        return (
          <div key={itemId} className="listContainer">
            <div className="listWrapper">
              <Marker className={isOpen ? 'markerActive' : 'marker'} />
              <p id={itemId} onClick={onTriggerClick} className="listTitle">
                {item.title}
              </p>
            </div>
            <div className={isOpen ? 'openRenderWrapper' : 'renderWrapper'}>
              {renderList(item, itemId)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
