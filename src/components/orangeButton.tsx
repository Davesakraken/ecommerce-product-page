interface props {
  icon?: JSX.Element;
  text: string;
  classNames?: string;
}

export default function OrangeButton({ text, icon, classNames }: props) {
  return (
    <div
      className={`flex items-center justify-center gap-2 w-60 h-12 select-none bg-orange-default rounded-lg cursor-pointer shadow-md shadow-orange-pale ${classNames}`}
    >
      {icon}
      <p className="text-white font-bold text-[13px]">{text}</p>
    </div>
  );
}
