import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LINKS } from "../static/index";
import { NavLink } from "react-router-dom";

const SlidingMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <motion.div
      ref={menuRef}
      initial={{ height: 0 }}
      animate={{ height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
      className={`absolute top-full left-0 w-full bg-white z-40 border-x ${
        isOpen ? "border-b" : ""
      } overflow-hidden`}
    >
      <nav>
        <ul className="flex flex-col justify-center items-center gap-4 p-6 max-[430px]:p-4">
          {LINKS.map((link) => (
            <NavLink
              to={link.url}
              key={link.url}
              className={({ isActive }) =>
                isActive ? "text-[#A2591A] font-bold" : ""
              }
            >
              <li className="cursor-pointer text-lg font-poppins max-[430px]:text-base">
                {link.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default SlidingMenu;
