import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Index = ({ src, height, width, alt, className,style }: any) => {
  return <LazyLoadImage className = {className} style = {style} alt={alt} height={height} src={src} width={width} />;
};

export default Index;
