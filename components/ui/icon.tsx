import Image from "next/image";

const Icon = ({ iconUrl }: { iconUrl: string }) => {
  return (
    <div className=" flex bg-muted rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl w-[34.8px] h-[34.11px] text-primary relative ">
      <div className="mx-auto absolute top-[-5] left-[-20] ">
        <Image
          src={`/images/icons/${iconUrl}`}
          alt="icon"
          width={35.41}
          height={35.41}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Icon;

//
