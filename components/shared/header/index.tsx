import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import { APP_NAME_AR } from "@/lib/constants";

const NavBar = () => {
  return (
    <header className="w-full " dir="rtl">
      <div className="wrapper flex-between  ">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/madakheel-logo.png"
              alt={`${APP_NAME_AR} logo`}
              className="mx-3"
              width={70}
              height={70}
              // layout="intrinsic"
              priority={true} // what is priority
            />

            <span className="hidden lg:block font-bold text-2xl ml-3 ">
              {APP_NAME_AR}
            </span>
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default NavBar;
