import React, { useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';

type Item = {
  title: string;
  data?: Item[];
  value?: string;
};

interface IProps {
  data: Item[];
  renderList: (data: Item, id: string) => JSX.Element;
}

export const List: React.FC<IProps> = ({ data, renderList }) => {
  const [isTriggerOpen, setIsTriggerOpen] = useState('');

  const onTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = e.currentTarget.id;

    setIsTriggerOpen((p) => (p === id ? '' : id));
  };

  return (
    <div>
      {data.map((item, idx) => {
        console.log(item);
        return (
          <div key={`${item.title}.${idx}`}>
            <p id={`${item.title}.${idx}`} onClick={onTriggerClick}>
              <CaretDownOutlined />
              {item.title}
            </p>
            {isTriggerOpen === `${item.title}.${idx}` &&
              renderList(item, `${item.title}.${idx}`)}
          </div>
        );
      })}
    </div>
  );
};
