import { useState, useEffect } from "react";
import { Menu, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image";
import logo from '../assets/Logo1.png';

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#About" },
  { name: "Skill", href: "#Skill" },
  { name: "Project", href: "#Project" },
  { name: "Contact", href: "#Contact" },
];

function Navbar({ dark, data }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

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
    <header className="font-inter bg-navyColor" id="hero">
      <div className="container text-white py-8">
        <Sheet>
          <nav className="flex flex-row justify-between items-center text-center md:flex-row md:space-y-0 md:space-x-20 md:text-left">
            <div className="w-24">
              <Image src={logo} className="w-20" alt={logo} />
            </div>

            <ul className="hidden gap-10 text-white md:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </ul>

            <div className="hidden md:flex gap-5">
              <Button className="bg-blueColor">
                Login
              </Button>
              <Button className="bg-blueColor">
                Try Whitepace free
              </Button>
            </div>
            <SheetTrigger className="text-white hide "><Menu className="h-6 dark:text-white" /></SheetTrigger>
          </nav>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Whitespace</SheetTitle>
              <SheetDescription>
              <ul className="hidden gap-10 text-black md:flex">
              {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-black">
                    {item.name}
                  </a>
                ))}
              </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
