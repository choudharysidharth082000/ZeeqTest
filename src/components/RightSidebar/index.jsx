import React, { useContext } from "react";
import { useState } from "react";
import Tile from "../Tile";
import RowComponent from "./RowComponent";
import TileMiddle from "../TileMiddle";
import { GlobalContext } from "../GlobalContext";

const Right = (props) => {
  const context = useContext(GlobalContext);
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
        <h1>Edit Home Screen </h1>
        {context.state.rowsData.map((row) => (
          <RowComponent
            key={row.id}
            id={row.id}
            tilesData={row.tilesData}
            tiles={row.tiles}
            SectionName={row.name}
          />
        ))}
      </div>
      <button onClick={context.handleAddRows} className="fixed bottom-10 right-10 z-50 bg-blue-500 text-white p-2 rounded-full">Add Rows</button>
      <button onClick={context.updateData} className="fixed bottom-5 right-15 z-50 bg-blue-500 text-white p-2 rounded-full">Update Data</button>
    </>
  );
};

export default Right;
