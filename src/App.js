//importing the files
import SideBar from "../src/components/SideBar";
import RightSidebar from "../src/components/RightSidebar"
import MiddleContent from "./components/MiddleContent";
export default function App() {
  return (
   <div className="containor w-full h-max bg-[#efefef] flex justify-between items-center relative">
    {/* Sidebar */}
    <SideBar />
    {/* MiddleContent */}
    <div className="middleContent w-full h-full p-10">
      <MiddleContent />      
    </div>
    {/* <div className="fileButton absolute top-28 right-0">
      <button className="bg-blend-color-burn w-28 h-10 translate-x-0">Template 1</button>
    </div> */}
    {/* Right Drawer for component selection */}
    <RightSidebar />
   </div>
  )
}