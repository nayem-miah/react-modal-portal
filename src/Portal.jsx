import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({children}) => {
  const  mountPortal = document.getElementById('portal-root')
  const elementDiv = document.createElement('div');

  useEffect(()=>{
    mountPortal.appendChild(elementDiv);

    return () => mountPortal.removeChild(elementDiv);
  },[elementDiv, mountPortal])
  
  return createPortal(children, mountPortal)
}
export default Portal;