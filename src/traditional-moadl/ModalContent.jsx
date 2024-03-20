
const Child = ()=>{
    return (
        <div className="border border-red-500 p-1">
           <h1> Im Child</h1>
           <button>Click</button>
        </div>
    )
}

export default function ModalContent({onClose}) {
  return (
    <div className="flex flex-col items-center border rounded-lg absolute top-20 left-12 bottom-20 z-10 bg-black text-white p-2" role="dialog" aria-modal="true">
      <h1 className='mx-2'>Hey! Im  modal </h1>
      <Child/>
      <button className="bg-white text-black p-1 border rounded-md" onClick={onClose} > Close</button>
    </div>
  )
}

// Note: it's important to add the attributes role="dialog" aria-modal="true" 
//  for a screen reader which is neccessary for blind users
