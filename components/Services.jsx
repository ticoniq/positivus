import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button';
import { ArrowRight } from "lucide-react";
import services1 from '@/assets/service1.png';
import services2 from '@/assets/service2.png';
import services3 from '@/assets/service3.png';

function About() {
  return (
    <>
      <section id="services" className="py-28">
        <div className="container space-y-20">
          <Card className="border-none shadow-none flex flex-col justify-center items-center gap-16 mx-auto space-y-10 text-center md:flex-row md:text-left">
            <CardContent className="p-0 md:w-1/2 space-y-8">
              <CardTitle className="text-darkColor text-4xl font-bold md:text-5xl">Project <br /> Management</CardTitle>
              <CardDescription>
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
              </CardDescription>
              <div className="font-medium">
                <Button className="bg-blueColor">
                  Try it now <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <figure className="mx-auto md:w-1/2">
              <Image src={services1} alt={services1} className="w-full" />
            </figure>
          </Card>
          <Card className="border-none shadow-none flex flex-col justify-center items-center gap-16 mx-auto space-y-10 text-center md:text-left even:md:flex-row-reverse">
            <CardContent className="p-0 md:w-1/2 space-y-8">
              <CardTitle className="text-darkColor text-3xl font-bold md:text-5xl">Work together</CardTitle>
              <CardDescription>
                With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
              </CardDescription>
              <div className="md:flex font-medium">
                <Button className="bg-blueColor">
                  Try it now <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <figure className="mx-auto md:w-1/2">
              <Image src={services2} alt={services2} className="w-full" />
            </figure>
          </Card>
        </div>
      </section>
      <section id="services" className="py-20 bg-navyColor">
        <div className="container space-y-20">
          <Card className="border-none bg-transparent shadow-none flex flex-col justify-center items-center gap-16 mx-auto text-center md:flex-row md:text-left">
            <CardContent className="p-0 md:w-1/2 space-y-8">
              <CardTitle className="text-white text-4xl font-bold md:text-5xl">Use as Extension</CardTitle>
              <CardDescription className="text-white">
                Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
              </CardDescription>
              <div className="font-medium">
                <Button className="bg-blueColor">
                  Try it now <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <figure className="mx-auto md:w-1/2">
              <Image src={services1} alt={services1} className="w-full" />
            </figure>
          </Card>
        </div>
      </section>
      <section id="services" className="py-10">
        <div className="container space-y-20">
          <Card className="border-none shadow-none flex flex-col-reverse justify-center items-center gap-16 mx-auto space-y-10 text-center md:flex-row-reverse md:text-left">
            <CardContent className="p-0 md:w-1/2 space-y-8">
              <CardTitle className="text-darkColor text-3xl font-bold md:text-5xl">Customise it to <br /> your needs</CardTitle>
              <CardDescription>
                Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
              </CardDescription>
              <div className="md:flex font-medium">
                <Button className="bg-blueColor">
                  Try it now <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <figure className="mx-auto md:w-1/2">
              <Image src={services3} alt={services3} className="w-full" />
            </figure>
          </Card>
        </div>
      </section>
    </>
  );
}

export default About;
