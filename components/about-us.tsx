import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      className="flex-between flex-col-reverse md:flex-row min-h-[60vh]  wrapper"
      dir="rtl"
    >
      <div>
        <Image
          src="/images/team-goals-bro.png"
          alt="Picture of the author"
          width={500}
          height={500}
          priority={true}
        />
      </div>
      <div className="flex flex-col w-[50%] gap-7">
        <h1 className="h1-bold">
          خبراء الأصول العقارية يقدمون لكم أفضل الخدمات في مداخيل
        </h1>
        <p className="text-justify">
          "مداخيل" على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها لتصبح
          رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة وذلك لأننا
          نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات ذوي خبرة عريقة و
          مستوى رفيع من الكفاءة و المصداقية قادرين على خدمة العملاء بطريقة تلبي
          احتياجاتهم و طموحاتهم .
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
