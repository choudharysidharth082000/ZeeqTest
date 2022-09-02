import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Tile = (props) => {
  const context = useContext(GlobalContext);
  return (
    <div className="containorTile bg-white border border-gray-200 p-2 rounded-md flex flex-row mb-4 cursor-pointer">
      <div className="containor1 d-flex flex-col h-full flex-1">
        <div className="mainHeader pt-1 pb-1 pl-1 pr-0 mb-2">
          <h1 className="text-lg font-semibold text-gray-600">{props.title}</h1>
        </div>
        <div className="HeaerInfo p-1 flex flex-col">
          <p className="text-xs font-normal text-gray-500">{props.subTitle}</p>
          <p className="text-lg text-gray-600 font-semibold pt-1">
            {props.value}{" "}
            <span className="text-green-500 text-xs font-semibold">{props.type=='iso'?context.state.iso:context.state.unix}</span>
          </p>
        </div>
      </div>
      <div className=" ml-5 containor2 w-28 h-28">
        <img className="object-contain h-full w-36" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUxHLNzkOLCjjInfVFWEhi_F9qgRhQrXLDePgYtWeI6ysKZ2Pp36fZnJdiOC_ma4BIWI&usqp=CAU" alt="" />     
      </div>
    </div>
  );
};

export default Tile;
