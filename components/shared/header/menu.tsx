import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Phone } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3 ">
      <nav className="hidden xl:flex w-full max-w-full gap-1">
        <Button asChild variant="ghost" className="font-bold">
          <Link href="#">الصفحة الرئيسية</Link>
        </Button>
        <Button asChild variant="ghost" className="font-bold">
          <Link href="#">من نحن</Link>
        </Button>
        <Button asChild variant="ghost" className="font-bold">
          <Link href="#">خدماتنا</Link>
        </Button>
        <Button asChild variant="ghost" className="font-bold">
          <Link href="#">اتصل بنا</Link>
        </Button>
        <Button asChild variant="ghost" className="font-bold">
          <Link href="#"> بلوج</Link>
        </Button>

        <Button asChild variant="ghost" className="bg-primary text-white">
          <Link href="/cart">
            واتساب <Phone />
          </Link>
        </Button>
      </nav>
      <nav className="xl:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>القائمة</SheetTitle>
            <Button asChild variant="ghost" className="font-bold">
              <Link href="#">الصفحة الرئيسية</Link>
            </Button>
            <Button asChild variant="ghost" className="font-bold">
              <Link href="#">من نحن</Link>
            </Button>
            <Button asChild variant="ghost" className="font-bold">
              <Link href="#">خدماتنا</Link>
            </Button>
            <Button asChild variant="ghost" className="font-bold">
              <Link href="#">اتصل بنا</Link>
            </Button>
            <Button asChild variant="ghost" className="font-bold">
              <Link href="#"> بلوج</Link>
            </Button>

            <Button asChild variant="ghost" className="bg-primary text-white">
              <Link href="/cart">
                واتساب <Phone />
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;

// max-w-full : will make the width of the element to be 100% of the parent element
