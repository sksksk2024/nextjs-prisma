import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <h1 className="text-black font-bold text-2xl mx-auto">NAVBAR</h1>
      {children}
    </div>
  );
};

export default Layout;
