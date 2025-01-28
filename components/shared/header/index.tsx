"use client";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import { APP_NAME_AR } from "@/lib/constants";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname, searchParams]);

  // For debugging
  console.log("Current path:", currentPath);

  return (
    <header className="w-full " dir="rtl">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/madakheel-logo.png"
              alt={`${APP_NAME_AR} logo`}
              className="mx-3"
              width={70}
              height={70}
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
