import React from 'react';

export const ItemText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p>{children}</p>;
};
