import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-muted">
      <div
        className="flex-between flex-col-reverse md:flex-row min-h-[60vh] wrapper"
        dir="rtl"
      >
        <div className="flex flex-col w-[50%] gap-7">
          <h1 className="h1-bold">مداخيل مرجعك العقاري</h1>
          <p className="text-justify">
            المملكة العربية السعودية ذات تاريخ عريق قديم الأزل قدمها وعراقتها لا
            تلغي أنها تتمتع بتطور وحداثة وتجدد يقوم على رؤية واضحة تعكس مقوماتها
            المتعددة الاقتصادية والبيئية والثروات النفطية و التقدم العمراني
            والسكاني
          </p>
          <div className="flex flex-row gap-4">
            <Button variant="default">أكتشف الان</Button>
            <Button>
              <Link href="/contact-us">أتصل بنا</Link>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/images/house-searching-bro.png"
            alt="Picture of the author"
            width={500}
            height={500}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
