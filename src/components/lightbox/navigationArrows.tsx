import { PreviousIcon, NextIcon } from "../svgs";

interface props {
  handleClick: (index: number) => void;
  currentIndex: number;
}

export default function NavigationArrows({ handleClick, currentIndex }: props) {
  return (
    <>
      <div
        onClick={() => {
          handleClick(currentIndex - 1);
        }}
        className="cursor-pointer absolute top-[19rem] left-[-1.7rem] items-center rounded-full bg-white w-14 h-14 z-50"
      >
        <div className="flex justify-center items-center h-full pr-1">
          <PreviousIcon />
        </div>
      </div>
      <div
        onClick={() => {
          handleClick(currentIndex + 1);
        }}
        className="cursor-pointer absolute top-[19rem] right-[-1.7rem] items-center rounded-full bg-white w-14 h-14 z-50"
      >
        <div className="flex justify-center items-center h-full pl-1">
          <NextIcon />
        </div>
      </div>
    </>
  );
}
