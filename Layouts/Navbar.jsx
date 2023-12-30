import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  Menu,
  XIcon,
} from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#About" },
    { name: "Skill", href: "#Skill" },
    { name: "Project", href: "#Project" },
    { name: "Contact", href: "#Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky bg-navyColor">
      <nav className="container border border-red-600 flex items-center justify-between py-16">
        <div className="flex lg:flex-1">
          <a href="#hero" className="">
            <span className="font-semibold md:font-bold text-lg md:text-xl">TochiDev</span>
          </a>
        </div>
        <ul className="hidden md:flex md:gap-x-16 items-center lg:mr-16">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6">
              {item.name}
            </a>
          ))}
        </ul>
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md"
            onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 dark:text-white" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
