import Image from "next/image";
import Icon from "./ui/icon";
import { Button } from "./ui/button";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div
      className="flex-between flex-col-reverse md:flex-row min-h-[60vh]  wrapper"
      dir="rtl"
    >
      <div>
        <Image
          src="/images/madakheel-img.png"
          alt="Picture of the author"
          width={500}
          height={500}
          priority={true}
        />
      </div>
      <div className="flex flex-col w-[50%] gap-7">
        <h1 className="h1-bold">اطلب خدماتنا</h1>
        <p className="text-justify">
          نسعد بتقديم أفضل الخدمات اليكم من خلال الاتصال بنا على الرقم الموحد او
          عن طريق الايميل او من خلال نموذج الطلب ونعدكم بتجربة مميزة
        </p>
        <div id="contact-info">
          <div className="flex gap-12">
            <div className="flex-start gap-7">
              <Icon iconUrl="telephone.png" />
              <div className="flex flex-col">
                <span>رقم الهاتف</span>
                <span>90000000</span>
              </div>
            </div>
            <div className="flex-start gap-7">
              <Icon iconUrl="email.png" />
              <div className="flex flex-col">
                <span> البريد الالكتروني</span>
                <span>90000000</span>
              </div>
            </div>
          </div>
          <Button
            asChild
            variant="ghost"
            className="mt-6 bg-primary text-white"
          >
            <Link href="/contact-us">تواصل معنا </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
