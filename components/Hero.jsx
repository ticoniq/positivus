import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from "lucide-react";
import illustration from '@/assets/illustration.png';

function Hero() {
  
  return (
    <section className="font-inter bg-navyColor home_banner" id="hero">
      <div className="container text-white">
        <div className="flex flex-col justify-center items-center py-16 mx-auto space-y-10 text-center md:flex-row md:space-y-0 md:text-left">

          {/* Left item */}
          <div className=" flex flex-col justify-center md:w-1/2 space-y-10">
            <article className="space-y-10 self-start">
              <h1 className="max-w-80 leading-10 text-3xl font-bold md:text-5xl">
                Get More Done with whitepace
              </h1>
              <p className=" text-base font-normal">
                Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
              </p>
            </article>
            <div className="hidden md:flex font-medium">
              <Button className="bg-blueColor">
                Try Whitepace free <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Right item */}
          <figure className="mx-auto md:w-1/2">
            <Image src={illustration} className="w-full object-cover sm:" alt={illustration} />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
