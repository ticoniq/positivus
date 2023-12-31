import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import logo from '../assets/Logo1.png';

function Footer() {
  return (
    <footer id="services" className="bg-navyColor py-10 md:pt-28">
      <div className="container">
        <section className="text-white grid grid-cols-1 gap-5 space-y-10 md:grid-cols-5 md:space-y-0">
          <div>
            <ul className="space-y-4 p-0">
              <li><Image className="w-5/6" src={logo} alt="logo" /></li>
              <p className="leading-8">
                whitepace was created for the new ways we live and work. We make a better workspace around the world
              </p>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Product</h4>
            <ul className="space-y-4">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Customer stories</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides & tutorials</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Company</h4>
            <ul className="space-y-4">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Media Kit</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-[1.75rem]">Try It Today</h4>
            <p>
            Get started for free. Add your whole team as your needs grow.
            </p>
            <div className="md:flex font-medium">
              <Button className="bg-blueColor">
                Try it now <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="mt-10 footer-end flex flex-col space-y-10 justify-between md:flex-row text-white md:space-y-0 md:mt-20">
          <ul className="flex flex-col gap-10 col-span-3 md:flex-row">
            <li><a href="#">English</a></li>
            <li><a href="#">Terms & privacy</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Status</a></li>
            <p>©2021 Whitepace LLC.</p>
          </ul>
          <ul className="flex gap-5">
            <li><a href="#"><FacebookIcon /></a></li>
            <li><a href="#"><TwitterIcon /></a></li>
            <li><a href="#"><LinkedinIcon /></a></li>
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer