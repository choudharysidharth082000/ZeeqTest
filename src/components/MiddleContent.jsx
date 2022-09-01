import React from "react";
import Tile from "./Tile";
import TileMiddle from "./TileMiddle";

const MiddleContent = () => {
  return (
    <>
      <div className="containor w-full min-h-[30%] flex justify-evenly items-center rounded-lg flex-wrap">
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className="containor w-full min-h-[30%] flex justify-evenly items-center rounded-lg flex-wrap p-2">
        <TileMiddle  title="$35.4k" image="https://www.datylon.com/hs-fs/hubfs/Datylon%20Website2020/Landing%20Pages/Pie%20Chart%20Maker/datylon-landing-page-pie-chart-maker-styling.gif?width=1246&height=934&name=datylon-landing-page-pie-chart-maker-styling.gif"/>
        <TileMiddle  title="4,530" image="https://user-images.githubusercontent.com/7336481/133036451-e1f2f12b-9e96-4a0f-8c69-4f630bb8ded3.gif"/>
        <TileMiddle  title="42.5k" image="http://3.bp.blogspot.com/-M91YNXIBf7E/U4j6PhOr-hI/AAAAAAAAA-I/grFsnRi6iWs/s1600/ezgif-save+(1).gif"/>
        <TileMiddle  title="135k" image="https://i.pinimg.com/originals/cb/17/b8/cb17b80a942d7c317a35ff1324fae12f.gif"/>
        <TileMiddle  title="2856" image="https://cliply.co/wp-content/uploads/2020/02/372002790_LINE_CHART_400pix.gif"/>        
      </div>
      <div className="containor w-full min-h-[30%] flex justify-evenly items-center rounded-lg flex-wrap">
        <Tile />
        <Tile />
        <Tile />
      </div>
      {/* <div className="containor w-full min-h-[30%] flex justify-evenly items-center rounded-lg flex-wrap p-2">
        <TileMiddle  title="$35.4k" image="https://www.datylon.com/hs-fs/hubfs/Datylon%20Website2020/Landing%20Pages/Pie%20Chart%20Maker/datylon-landing-page-pie-chart-maker-styling.gif?width=1246&height=934&name=datylon-landing-page-pie-chart-maker-styling.gif"/>
        <TileMiddle  title="4,530" image="https://user-images.githubusercontent.com/7336481/133036451-e1f2f12b-9e96-4a0f-8c69-4f630bb8ded3.gif"/>
        <TileMiddle  title="42.5k" image="http://3.bp.blogspot.com/-M91YNXIBf7E/U4j6PhOr-hI/AAAAAAAAA-I/grFsnRi6iWs/s1600/ezgif-save+(1).gif"/>
        <TileMiddle  title="135k" image="https://i.pinimg.com/originals/cb/17/b8/cb17b80a942d7c317a35ff1324fae12f.gif"/>
        <TileMiddle  title="2856" image="https://cliply.co/wp-content/uploads/2020/02/372002790_LINE_CHART_400pix.gif"/>        
      </div> */}
      
      {/* <div className="containor w-full min-h-[30%] bg-white flex justify-evenly items-center rounded-lg flex-wrap">

      </div> */}
    </>
  );
};

export default MiddleContent;
