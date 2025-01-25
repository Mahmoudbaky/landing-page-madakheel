import { Phone } from "lucide-react";

const Icon = () => {
  return (
    <div className=" flex bg-muted rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl w-[34.8px] h-[34.11px] text-primary relative ">
      <div className="mx-auto absolute top-[-5] left-[-20] w-[35.41px] h-[35.41px]">
        <Phone />
      </div>
    </div>
  );
};

export default Icon;
