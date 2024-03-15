import { HiOutlineUser } from "react-icons/hi2";
import { Popover } from "@headlessui/react";
import useToggle from "../../../../hooks/useToggle";
import AuthModal from "../../../../shared/components/authModal";
import { useState } from "react";
import RegisterModal from "../../../../shared/components/RegisterModal";
const LoginMenu = () => {
  const [state, toggle] = useToggle();
  const [showRegister, setShowRegister] = useState(false);
  const hideModal = () => {
    toggle();
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="outline-none">
          <HiOutlineUser size={25} />
        </Popover.Button>

        <Popover.Panel className="absolute left-0 z-10 bg-white shadow-md rounded-sm w-[100px] ">
          <div
            onClick={toggle}
            className="px-4 py-2 text-gray-700 hover:text-red-500 text-xs border-b border-[#E6E6E6] transition-colors duration-300 ease-in-out cursor-pointer"
          >
            Sign in
          </div>
          <div
            onClick={toggleRegister}
            className="px-4 py-2 text-gray-700 hover:text-red-500 text-xs border-b border-[#E6E6E6] transition-colors duration-300 ease-in-out cursor-pointer"
          >
            Sign up
          </div>
        </Popover.Panel>
      </Popover>
      {state && <AuthModal hideModal={hideModal} />}
      {showRegister && <RegisterModal toggleRegister={toggleRegister} />}
    </>
  );
};

export default LoginMenu;
