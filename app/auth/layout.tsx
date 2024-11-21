import React from "react";

type Props = {
  children: React.ReactNode;
};

const authLayout = ({ children }: Props) => {
  return (
    <div className="container h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default authLayout;
