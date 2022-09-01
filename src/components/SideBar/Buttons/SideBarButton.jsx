import React from "react";


const SideBarButton = (props) => {
  return (
    <div className="showItems w-[100%] pt-2 pr-4 pb-2 h-full flex flex-col mb-2">
      <button className={` ${props.type === 'normal' ? 'bg-white text-gray-500 hover:bg-slate-100' : 'bg-orange-500'} text-white pt-2 pb-2 rounded-r-md`}>{props.name}</button>
    </div>
  );
};

export default SideBarButton;
