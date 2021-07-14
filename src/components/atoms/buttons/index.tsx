import React from "react";
import { Button } from "react-bootstrap";
import "./style.scss";
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
  disabled?: boolean;
  props?: any;
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
  height,
  disabled,
  ...props
}) => {
  return (
    <Button
      className={`${className} ${hover && "activeHover"}`}
      style={{
        width: width,
        height: height,
        border: border,
        fontSize: size,
        color: color,
        backgroundColor: background,
        borderColor: background,
      }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};
export default Index;
