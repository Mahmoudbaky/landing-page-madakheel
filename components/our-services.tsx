import ServiceCard from "./ui/service-card";
import { services } from "@/data/data";

const OurServices = () => {
  return (
    <div className="bg-muted py-9">
      <div className="flex-center flex-col gap-4 wrapper">
        <div>
          <h1 className="h1-bold">تعرف علي خدماتنا</h1>
        </div>
        <div
          id="services-cards"
          className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-6"
        >
          {services.map((s, index) => (
            <ServiceCard key={index} data={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
