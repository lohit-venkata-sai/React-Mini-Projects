import { useState } from "react";
import { IoIosStar } from "react-icons/io";
function App({ noOfStars = 5 }) {
  const Active = {
    color: "#FFD700",
  };
  const inActive = {};
  const [isClicked, setIsClicked] = useState(false);
  const [hover, setHover] = useState(-1);
  const [rating, setRating] = useState(-1);
  const handleClick = (id) => {
    setIsClicked(true);
    setRating(id);
  };
  const handleMouseEnter = (id) => {
    isClicked ? null : setRating(id);
  };
  const handleMouseLeave = () => {
    isClicked ? null : setRating(-1);
  };
  return (
    <div className="h-full border flex gap-0.5 text-2xl">
      {[...Array(noOfStars)].map((_, ind) => (
        <IoIosStar
          style={ind <= hover || ind <= rating ? Active : inActive}
          key={ind}
          onClick={() => handleClick(ind)}
          onMouseEnter={() => handleMouseEnter(ind)}
          onMouseLeave={() => handleMouseLeave()}
        />
      ))}
    </div>
  );
}

export default App;
