import SideBar from "./SideBar";

export default function Container({children}) {
    return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SideBar>
        {children}
        </SideBar>
        </div>
  }
  