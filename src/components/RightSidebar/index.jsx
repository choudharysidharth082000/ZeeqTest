import React from "react";
import { useState } from "react";
import Tile from "../Tile";
import TileMiddle from "../TileMiddle";

const Right = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-gray-600 items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 overflow-y-scroll w-[75vw] h-screen bg-[#efefef] text-gray-500 fixed z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 font-semibold text-white overflow-y-scroll">
          {/* Header */}
          <div className="header w-full p-2 flex flex-col">
            {/* <h1 className="text-gray-600 text-4xl pl-8 mb-6">New Page</h1> */}
            <div className="containorInput w-full p-10 flex flex-col">
              <input className="text-4xl outline-none border-none text-gray-500 p-10 bg-[#efefef]" type="text" placeholder="Untitled" />
            </div>
            <div className="optiionsFlex flex justify-start bg-red-200 ">
              <div className="containorCheckOptions">

                </div>                            
            </div>
          </div>
          {/* <div className="showCase w-full mt-3 p-2 flex justify-evenly flex-row flex-wrap">
           <Tile />
           <Tile />
           <Tile />
          </div>
          <div className="showCase w-full mt-3 p-2 flex justify-evenly flex-row flex-wrap">
            <TileMiddle
              title="$35.4k"
              image="https://www.datylon.com/hs-fs/hubfs/Datylon%20Website2020/Landing%20Pages/Pie%20Chart%20Maker/datylon-landing-page-pie-chart-maker-styling.gif?width=1246&height=934&name=datylon-landing-page-pie-chart-maker-styling.gif"
            />
            <TileMiddle
              title="4,530"
              image="https://user-images.githubusercontent.com/7336481/133036451-e1f2f12b-9e96-4a0f-8c69-4f630bb8ded3.gif"
            />
            <TileMiddle
              title="4,530"
              image="https://user-images.githubusercontent.com/7336481/133036451-e1f2f12b-9e96-4a0f-8c69-4f630bb8ded3.gif"
            />
            <TileMiddle
              title="4,530"
              image="https://user-images.githubusercontent.com/7336481/133036451-e1f2f12b-9e96-4a0f-8c69-4f630bb8ded3.gif"
            />
            
          </div> */}
        </h3>
      </div>
    </>
  );
};

export default Right;
