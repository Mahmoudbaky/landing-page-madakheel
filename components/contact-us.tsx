import Image from "next/image";
import { Button } from "./ui/button";
import Icon from "./ui/icon";

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
        <div>
          <div>
            <Icon />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
