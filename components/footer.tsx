import { APP_NAME_EN } from "@/lib/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" text-black font-bold text-center p-4 w-full">
      <p>&copy; {`${year} ${APP_NAME_EN}`} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
