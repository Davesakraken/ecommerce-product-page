import { PreviousIcon, NextIcon } from "@/components/svgs";

interface props {
  handleClick: (index: number) => void;
  currentIndex: number;
  positionLeft: string | undefined;
  positionRight: string | undefined;
}

export default function NavigationArrows({ handleClick, currentIndex, positionLeft, positionRight }: props) {
  //styles
  const arrowIcons = "cursor-pointer absolute w-12 h-12 top-[40%] lg:top-[35%] rounded-full bg-white lg:w-14 lg:h-14";

  return (
    <>
      <div
        onClick={() => {
          handleClick(currentIndex - 1);
        }}
        className={`${arrowIcons} ${positionLeft}`}
      >
        <div className="flex justify-center items-center h-full pr-1">
          <PreviousIcon />
        </div>
      </div>
      <div
        onClick={() => {
          handleClick(currentIndex + 1);
        }}
        className={`${arrowIcons} ${positionRight}`}
      >
        <div className="flex justify-center items-center h-full pl-1">
          <NextIcon />
        </div>
      </div>
    </>
  );
}
