import React from "react";
import { sideMenu } from "./assets/menus";
import Menus from "./components/menus.jsx";
function App() {
  return (
    <div className="w-[350px] border-1 text-white h-screen bg-slate-500 pl-5 py-10  ">
      <Menus menus={sideMenu} />
    </div>
  );
}

export default App;
