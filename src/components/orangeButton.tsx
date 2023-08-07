interface props {
  icon?: JSX.Element;
  text: string;
  classNames?: string;
  onClick: () => void;
}

export default function OrangeButton({ text, icon, classNames, onClick }: props) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center gap-2 select-none bg-orange-default rounded-lg cursor-pointer shadow-md shadow-orange-pale ${classNames}`}
    >
      {icon}
      <p className="text-white font-bold text-[13px]">{text}</p>
    </div>
  );
}
