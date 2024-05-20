import React from 'react';

export const Tree: React.FC<{
  children: React.ReactNode;
  data?: any;
}> = ({ children, data }) => {
  console.log(data);
  return <ul>{children}</ul>;
};
