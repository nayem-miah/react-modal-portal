import { useState } from "react"
import ModalContent from "./ModalContent"
import Portal from "../Portal"



export default function TraditionalModal() {
    const [showModal, setShowModal] = useState(false)
    const onClose = () => {
        setShowModal(false)
    }


    const handleClick = () => {
        console.log('im clicked')
    }

  return (
    <div className="relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden" onClick={handleClick}>
       <button className="bg-black text-white p-1 border rounded-md" onClick={()=> setShowModal(true)}> Show the traditional modal </button>

       {showModal && (
          <Portal>
               <ModalContent onClose={onClose} />
         </Portal>

       )}
    </div>
  ) 
}
