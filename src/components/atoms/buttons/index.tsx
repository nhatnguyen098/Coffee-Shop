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
  width?: any;
  height?: any;
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
  width,
  height
}) => {
  return (
    <Button
      className={`${className} ${hover && 'activeHover'}`}
      style={{width: width, height: height, border: border ,fontSize: size, color: color, backgroundColor: background, borderColor: background}}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default Index;
