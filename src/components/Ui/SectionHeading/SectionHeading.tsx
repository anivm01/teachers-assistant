import { FC } from "react";
import "./SectionHeading.scss";

interface SectionHeadingProps {
  text: string;
  className?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ text, className = "" }) => {
  return <h2 className={`section-heading ${className}`}>{text}</h2>;
};

export default SectionHeading;
