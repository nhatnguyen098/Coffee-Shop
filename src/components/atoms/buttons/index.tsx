import React from "react";
import { Button } from "react-bootstrap";
import './style.scss'
interface IButton {
  className?: string;
  color?: string;
  background?: string;
  onClick?: () => void;
  hover?: boolean;
  size?: string;
  border?: string;
}
const Index: React.FC<IButton> = ({
  className,
  color,
  background,
  onClick,
  children,
  hover,
  size,
  border,
}) => {
  return (
    <Button
      className={`${className} ${hover && 'activeHover'}`}
      style={{border: border ,fontSize: size, color: color, backgroundColor: background, borderColor: background}}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default Index;
