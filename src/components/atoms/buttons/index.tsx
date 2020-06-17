import React from "react";
import { Button } from "react-bootstrap";
import './style.scss'
interface IButton {
  className?: string;
  color?: string;
  background?: string;
  onClick?: () => void;
  hover?: boolean
}
const Index: React.FC<IButton> = ({
  className,
  color,
  background,
  onClick,
  children,
  hover
}) => {
  return (
    <Button
      className={`${className} ${hover && 'activeHover'}`}
      style={{ color: color, backgroundColor: background, borderColor: background}}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default Index;
