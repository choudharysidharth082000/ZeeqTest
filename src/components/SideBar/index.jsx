import React from 'react'

const index = () => {
  return (
    <div className="pSide w-[30%] h-screen bg-white">
      {/* Logo Part */}
      <div className="logoContainor d-flex w-full p-2 flex justify-center items-center mt-2">
        <img className='object-contain w-28' src="https://zeeqtina.netlify.app/_next/static/media/logo.fe1ffe5c.svg" alt="" />        
        </div>      
        {/* <div className="containorButtons w-full bg-red-200 flex justify-center items-center flex-col">
          <button className='bg-orange-500 text-white'>Dashboard</button>          
        </div> */}
    </div>
  )
}

export default index