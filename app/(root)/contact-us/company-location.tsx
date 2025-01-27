import Image from "next/image";

const CompanyLocation = () => {
  return (
    <div
      className="flex-between flex-col-reverse md:flex-row min-h-[60vh]  wrapper"
      dir="rtl"
    >
      <div id="about-us-image" className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12689.328712973129!2d-122.008972!3d37.3346438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2ssa!4v1726831727317!5m2!1sen!2ssa"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="flex flex-col w-[50%] gap-7">
        <h1 className="h1-bold">العنوان الوطني</h1>
        <p className="text-justify">
          مداخيل على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها لتصبح
          رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة وذلك لأننا
          نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات ذوي خبرة عريقة و
          مستوى رفيع من الكفاءة و المصداقية قادرين على خدمة العملاء بطريقة تلبي
          احتياجاتهم و طموحاتهم .
        </p>
      </div>
    </div>
  );
};

export default CompanyLocation;
