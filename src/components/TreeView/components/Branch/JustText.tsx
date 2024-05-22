import React, { useState } from 'react';

export const JustText: React.FC<{ key: string; data: any }> = ({
  key,
  data,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((p) => !p);
  };
  return (
    <p onClick={onClick}>
      {key}
      {isOpen && <p>{`${data}`}</p>}
    </p>
  );
};
