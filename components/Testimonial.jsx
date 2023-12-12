import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import avater1 from '@/assets/avater1.png';
import avater2 from '@/assets/avater2.png';
import avater3 from '@/assets/avater3.png';
import whiteQuote from '@/assets/quote-white.png';
import navyQuote from '@/assets/quote-navy.png';

function Testimonial() {
  return (
    <>
      <section id="price" className="font-inter py-28">
        <div className="max-w-[57rem] space-y-5 px-[1.3] mb-14 mx-auto text-center">
          <h3 className="text-3xl font-bold md:text-5xl header-text">
            What Our Clients Says
          </h3>
        </div>
        <div className="container border-none shadow-none flex flex-col justify-center items-center gap-10 md:flex-row">
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
    </>
  )
}

export default Testimonial