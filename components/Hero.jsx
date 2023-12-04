import Image from 'next/image';
import illustration from '@/assets/Illustration.png';
import { Button } from './ui/button';

function Hero() {
  
  return (
    <section className="container font-spaceGrotesk my-10"
      id="hero">
      {/* Flex-containe */}
      <div className="flex flex-col space-y-10 items-center mx-auto md:flex-row md:space-y-0 md:space-x-20">
        {/* Left item */}
        <div className=" flex flex-col justify-center md:w-1/2 space-y-8">
          <article className="space-y-5 text-black">
            <h1 className="w-80 leading-10 text-3xl font-medium md:text-4xl">
              Navigating the digital landscape for success
            </h1>
            <p className="max-w-sm text-base font-normal">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
          </article>
          <div className="flex font-medium">
            <Button>Book a consultation</Button>
          </div>
        </div>
        <figure className="mx-auto md:w-1/2">
          <Image src={illustration} className="w-full object-cover" alt={illustration} />
        </figure>
        <div className="flex flex-col justify-center md:w-1/2 space-y-8 md:hidden">
          <article className="space-y-5 text-black">
            <p className="max-w-sm text-base font-normal">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
          </article>
          <div className="flex font-medium">
            <Button>Book a consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
