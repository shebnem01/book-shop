import { Link } from "react-router-dom";
import { footerLinks } from "../../constant/footerLink";
const Footer = () => {
  return (
    <footer className="bg-[#FBFBFB] dark:text-dark dark:bg-dark">
      <div className="footer-top">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between pt-11 pb-[100px]">
            {footerLinks?.map((item, i) => (
              <div className="footer-column" key={i}>
                <div className="text-md font-semibold mb-4">{item.title}</div>
                <ul className="footer-column-list">
                  {item.links?.map((item, i) => (
                    <li key={i} className="mbb-3 cursor-pointer hover:text-main">
                      <Link className="text-[#666] text-xs dark:text-dark  hover:text-main" to={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-main text-[#FFFCF5] dark:text-dark  text-xs h-12">
          <div className="w-[90%] mx-auto h-full">
            <div className="flex justify-between items-center h-full">
              <div className="text-xs">All rightd reserved</div>
              <div className="text-xs">©2024 Shebnem</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
