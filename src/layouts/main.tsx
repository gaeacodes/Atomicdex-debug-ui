import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Main = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <h2>Layout</h2>
      {children}
    </div>
  );
};

export default Main;
