import { FC } from "react";
import "./MainPageContainer.scss";

interface MainPageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MainPageContainer: FC<MainPageContainerProps> = ({
  children,
  className = "",
}) => {
  return <main className={`main-page-container ${className}`}>{children}</main>;
};

export default MainPageContainer;
