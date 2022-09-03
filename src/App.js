//importing the files
import SideBar from "./components/SideBar/Index";
import RightSidebar from "./components/RightSidebar/Index";
import MiddleContent from "./components/MiddleContent";
import { GlobalProvider } from "./components/GlobalContext";
export default function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}
