import React from 'react'

const TileMiddle = (props) => {
  return (
    <>
    <div className="tileMiddle flex justify-center items-center p-2 flex-col bg-white rounded-md mb-2 cursor-pointer transition-all hover:scale-105">
        <div className="containorUppperElement w-full flex">
            <p className='text-gray-600 font-semibold text-lg p-2'>{props.title}</p>            
        </div>
        <div className="graph w-36 h-36 mt-2">
            <img className='object-cover w-36 h-36' src={props.image} alt="" />
        </div>
    </div>
    </>
  )
}

export default TileMiddle