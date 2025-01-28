interface ServiceData {
  title: string;
  image: string;
  preaf: string;
}
import Icon from "./icon";

const ServiceCard = ({ data }: { data: ServiceData }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in"
      //   style="animation-delay: 0.1s;"
      dir="rtl"
    >
      <Icon iconUrl={data.image} />
      <h2 className="text-xl font-semibold text-primary dark:text-white mb-2 mt-3">
        {data.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{data.preaf}</p>
    </div>
  );
};

export default ServiceCard;
