import React from "react";
import { useState } from "react";
import Tile from "../Tile";
import RowComponent from "./RowComponent";
import TileMiddle from "../TileMiddle";

const Right = (props) => {
  const [rows, setRows] = useState([
    { id: 1, name: "Row 1", tiles: 4, tilesData: [{title: "Title", subTitle: 'SubTitle', value:"₹23,900", changePercent: "34%"}, {title: "Title", subTitle: 'SubTitle', value:"₹23,900", changePercent: "34%"}, {title: "Title", subTitle: 'SubTitle', value:"₹23,900", changePercent: "34%"}, {title: "Title", subTitle: 'SubTitle', value:"₹23,900", changePercent: "34%"}] },
    { id: 2, name: "Row 2", tiles: 2, tilesData: [{title: "Title", subTitle: 'SubTitle', value:"₹23,900", changePercent: "34%"}, {title: "Title", subTitle: 'SubTitle', value:"₹23,900", changePercent: "34%"}]},
    { id: 3, tiles: 3, tilesData: [{title: "Title", subTitle: 'SubTitle', value:"₹23,900", changePercent: "34%"}, {title: "Title", subTitle: 'SubTitle', value:"₹23,900", changePercent: "34%"}]},
  ]);
  const [showSidebar, setShowSidebar] = useState(false);
  const handleAddRows = () => {
    let numberoftiles = prompt("Enter number of tiles");
    let numberofPopulatedtiles = prompt("Enter number of tiles THAT ARE TO BE POPULATED");
    let name = prompt("Enter the name of the row (if it is a named section)");
    let tilesData = [];
    for (let i = 0; i < numberofPopulatedtiles; i++) {
      tilesData.push({
        title: "Title",
        subTitle: "SubTitle",
        value: "₹23,900",
        changePercent: "34%",
      });
    }
    setRows([...rows, { id: rows.length + 1, name: name ,tiles: numberoftiles, tilesData }]);
  }
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
        {rows.map((row) => (
          <RowComponent
            key={row.id}
            id={row.id}
            tilesData={row.tilesData}
            tiles={row.tiles}
            SectionName={row.name}
          />
        ))}
      </div>
      <button onClick={handleAddRows} className="fixed bottom-10 right-10 z-50 bg-blue-500 text-white p-2 rounded-full">Add Rows</button>
    </>
  );
};

export default Right;
