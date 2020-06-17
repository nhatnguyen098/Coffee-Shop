import React, { ReactNode } from "react";
interface IText {
  className?: string;
  color?: string;
  size?: string;
  children?: ReactNode;
  onClick?: () => void;
}
const Index: React.FC<IText> = ({ className,color, size, children, onClick }) => {
  return <p style = {{color: color}} onClick = {onClick} className = {className}>{children}</p>;
};

export default Index;
