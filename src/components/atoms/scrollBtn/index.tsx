import React from 'react'
import { AiFillUpCircle } from "react-icons/ai";
import { animateScroll as scroll} from 'react-scroll'
const Index = () => {
    return  <AiFillUpCircle
    className="icon-nav"
    color="#c49b63"
    size="38px"
    style={{position:'fixed',bottom:'5%', left:'95%' }}
    onClick = {() => scroll.scrollToTop()}
  />
}

export default Index
