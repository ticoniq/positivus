import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import avater1 from '@/assets/avater1.png';
import avater2 from '@/assets/avater2.png';
import avater3 from '@/assets/avater3.png';
import whiteQuote from '@/assets/quote-white.png';
import navyQuote from '@/assets/quote-navy.png';
import apple from '@/assets/apple.png';
import windows from '@/assets/windows.png';
import android from '@/assets/android.png';

function Testimonial() {
  return (
    <>
      <section id="price" className="font-inter py-10 md:py-28">
        <div className="max-w-[57rem] space-y-5 px-[1.3] mb-14 mx-auto text-center">
          <h3 className="text-3xl font-bold md:text-5xl header-text text-darkColor">
            What Our Clients Says
          </h3>
        </div>
        <div className="container flex flex-row overflow-scroll justify-center items-center gap-10">
        <Card className="py-14 px-6 border-none shadow-lightBlueColor">
          <CardContent className="p-0">
            <Image src={navyQuote} alt={navyQuote} className="w-1/5 mb-8"/>
            <CardDescription className="text-darkColor leading-6">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </CardDescription>
            <hr className="my-12 h-[0.1rem] border-t-0 bg-darkColor" />
          </CardContent>
          <CardFooter className="w-64 mx-auto p-0 flex flex-row justify-center items-start gap-10">
            <Image src={avater1} alt={avater1} className="w-20"/>
            <span className="text-darkColor w-2/3 space-y-2">
              <h5 className="text-navyColor font-semibold text-lg">Oberon Shaw, MCH</h5>
              <div className="text-darkColor">Head of Talent Acquisition, North America</div>
            </span>
          </CardFooter>
        </Card>
        <Card className="py-14 px-6 border-none shadow-lightBlueColor bg-[#4F9CF9]">
          <CardContent className="p-0">
            <Image src={whiteQuote} alt={whiteQuote} className="w-1/5 mb-8"/>
            <CardDescription className="text-white leading-6">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </CardDescription>
            <hr className="my-12 h-[0.1rem] border-t-0 bg-white" />
          </CardContent>
          <CardFooter className="w-64 mx-auto p-0 flex flex-row justify-center items-start gap-10">
            <Image src={avater2} alt={avater2} className="w-20"/>
            <span className="text-darkColor w-2/3 space-y-2">
              <h5 className="text-navyColor font-semibold text-lg">Oberon Shaw, MCH</h5>
              <div className="text-white">Head of Talent Acquisition, North America</div>
            </span>
          </CardFooter>
        </Card>
        <Card className="py-14 px-6 border-none shadow-lightBlueColor bg-[#4F9CF9]">
          <CardContent className="p-0">
            <Image src={whiteQuote} alt={whiteQuote} className="w-1/5 mb-8"/>
            <CardDescription className="text-white leading-6">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </CardDescription>
            <hr className="my-12 h-[0.1rem] border-t-0 bg-white" />
          </CardContent>
          <CardFooter className="w-64 mx-auto p-0 flex flex-row justify-center items-start gap-10">
            <Image src={avater3} alt={avater3} className="w-20"/>
            <span className="text-darkColor w-2/3 space-y-2">
              <h5 className="text-navyColor font-semibold text-lg">Oberon Shaw, MCH</h5>
              <div className="text-white">Head of Talent Acquisition, North America</div>
            </span>
          </CardFooter>
        </Card>
        </div>
      </section>
      <section id="services" className="pt-28 pb-5 bg-navyColor">
        <div className="container space-y-20">
          <Card className="bg-transparent border-none shadow-none flex flex-col justify-center items-center gap-16 mx-auto space-y-10 text-center">
            <CardContent className="p-0 max-w-md space-y-8 text-white">
              <CardTitle className="text-white text-3xl font-bold md:text-5xl">Try Whitepace today</CardTitle>
              <CardDescription className="text-lg text-white">
                Get started for free. <br /> Add your whole team as your needs grow.
              </CardDescription>
              <div className="md:flex font-medium justify-center items-center">
                <Button className="bg-blueColor">
                  Try it now <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
              <h6>On a big team? Contact sales</h6>
              <ul className="flex flex-row flex-wrap gap-10 justify-evenly items-center text-white">
                <li className="">
                  <Image src={apple} className="filter grayscale brightness-0 invert" alt={apple}/>
                </li>
                <li className="">
                  <Image src={windows} className="" alt={windows}/>
                </li>
                <li className="">
                  <Image src={android} className="" alt={android}/>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

export default Testimonial