import { PreviousIcon, NextIcon } from "../svgs";

export default function NavigationArrows() {
  return (
    <>
      <div className="absolute top-[15rem] left-[-1.7rem] items-center rounded-full bg-white w-14 h-14 z-50">
        <div className="flex justify-center items-center h-full pr-1">
          <PreviousIcon />
        </div>
      </div>
      <div className="absolute top-[15rem] right-[-1.7rem] items-center rounded-full bg-white w-14 h-14 z-50">
        <div className="flex justify-center items-center h-full pl-1">
          <NextIcon />
        </div>
      </div>
    </>
  );
}
