import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { SiNotion } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="px-5 lg:px-8 xl:px-12 2xl:px-32 py-5 text-center md:flex justify-between items-center">
      <p className="text-white">
        &copy; {new Date().getFullYear()} Karamela DAO
      </p>
      <div className="flex justify-center items-center space-x-6 mt-5 md:mt-0">
        <a href="https://twitter.com/karameladao">
          <BsTwitter className="text-xl text-rose-800" />
        </a>
        <a href="https://discord.gg/dKdeANjg8p">
          <BsDiscord className="text-xl text-rose-800" />
        </a>
        <a href="https://karameladao.notion.site/karameladao/KaramelaDAO-Townhall-f3ecf03d27e246dea8c03f4d6aae3088">
          <SiNotion className="text-xl text-rose-800" />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
