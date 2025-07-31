import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
const App = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://cdn.pixabay.com/photo/2022/08/18/19/00/water-7395510_1280.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1749920937484-a61e6a9566a9?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/11/02/09/16/christmas-2910468_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2023/09/18/13/46/pile-8260617_1280.jpg",
    },
  ];
  const [currInd, setCurrInd] = useState(3);
  const handleRightArr = () => {
    setCurrInd((prev) => (prev + 1) % images.length);
  };
  const handleLeftArr = () => {
    currInd == 0
      ? setCurrInd(images.length - 1)
      : setCurrInd((prev) => prev - 1);
  };
  const handleDotClick = (ind) => {
    setCurrInd(ind);
  };
  return (
    <div className="w-full h-[100vh] m-auto py-16 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${images[currInd]?.url})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 "
      ></div>
      <div className="hidden bg-black/10 group-hover:block top-[50%] left-5 rounded-full  absolute cursor-pointer">
        <MdOutlineKeyboardArrowLeft
          onClick={handleLeftArr}
          color="white"
          size="50px"
        />
      </div>
      <div className="hidden bg-black/10 group-hover:block top-[50%] right-5 rounded-full  absolute cursor-pointer">
        <MdOutlineKeyboardArrowRight
          onClick={handleRightArr}
          color="white"
          size="50px"
        />
      </div>
      <div className="flex justify-center">
        {images.map((item, ind) => (
          <span key={ind} className="cursor-pointer text-lg">
            {currInd == ind ? (
              <GoDotFill />
            ) : (
              <GoDot onClick={() => handleDotClick(ind)} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
