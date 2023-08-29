import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="col-span-3 lg:col-span-2 rounded-lg p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
