import { FC } from "react";

export const PageLayout: FC = ({ children }) => {
  return <div className="grid grid-rows-layout min-h-screen ">{children}</div>;
};
