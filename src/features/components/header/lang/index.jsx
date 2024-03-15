import { Popover } from "@headlessui/react";

const Lang = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="outline-none">EN</Popover.Button>

      <Popover.Panel className="absolute left-0 z-10 bg-white dark:bg-dark  dark:text-dark shadow-sm w-[40px] center p-1">
        <div className="flex flex-col gap-1">
          <span className="cursor-pointer dark:bg-dark  dark:text-dark hover:bg-gray-100 rounded-xs flex ">AZ</span>
          <span className="cursor-pointer dark:bg-dark  dark:text-dark hover:bg-gray-100 rounded-xs flex ">RU</span>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default Lang;
