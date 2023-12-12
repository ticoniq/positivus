import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button';
import { ArrowRight } from "lucide-react";
import data from '@/assets/data.png';
import apple from '@/assets/apple.png';
import microsoft from '@/assets/microsoft.png';
import slack from '@/assets/slack.png';
import google from '@/assets/google.png';

function Work() {
  return (
    <>
      <section id="work" className="font-inter py-28 bg-navyColor">
        <div className="container">
          <article className="max-w-[40rem] space-y-10 text-white">
            <h3 className="leading-10 text-4xl font-bold md:text-6xl">
              Your work, <br /> everywhere you are
            </h3>
            <p className="text-center leading-8">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            <div className="hidden md:flex font-medium">
              <Button className="bg-blueColor">
                Try Whitepace free <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </article>
        </div>
      </section>
      <section id="data" className="font-inter py-28">
        <div className="container">
          <Card className="border-none shadow-none flex flex-col justify-center items-center gap-16 mx-auto space-y-10 text-center md:flex-row md:text-left">
            <CardContent className="p-0 md:w-1/2 space-y-14">
              <CardTitle className="text-darkColor text-4xl font-bold md:text-5xl">100% your data</CardTitle>
              <CardDescription>
                The app is open source and your notes are saved to an open format, so you will always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
              </CardDescription>
              <div className="font-medium">
                <Button className="bg-blueColor">
                  Read More <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <figure className="mx-auto md:w-1/2">
              <Image src={data} alt={data} className="w-full" />
            </figure>
          </Card>
        </div>
      </section>
      <section id="data" className="font-inter py-28">
        <div className="max-w-[57rem] space-y-5 px-[1.3] mb-14 mx-auto text-center">
          <h3 className="text-3xl font-bold md:text-5xl header-text">
            Our sponsors
          </h3>
        </div>
        <div className="container">
          {/* <span className="border-none shadow-none flex flex-col justify-center items-center gap-16 mx-auto space-y-10 text-center md:flex-row md:text-left">
              <Image src={data} alt={data} className="w-full" />
              <Image src={data} alt={data} className="w-full" />
              <Image src={data} alt={data} className="w-full" />
              <Image src={data} alt={data} className="w-full" />
          </span> */}
          <ul className="flex flex-row flex-wrap gap-16 justify-evenly items-center text-white">
            <li className="flex flex-col flex-grow items-center p-3">
              <Image src={apple} className="" width={'100%'} alt={apple}/>
            </li>
            <li className="flex flex-col flex-grow items-center p-3">
              <Image src={microsoft} className="" width={'100%'} alt={microsoft}/>
            </li>
            <li className="flex flex-col flex-grow items-center p-3">
              <Image src={slack} className="" width={'100%'} alt={slack}/>
            </li>
            <li className="flex flex-col flex-grow items-center p-3">
              <Image src={google} className="" width={'100%'} alt={google}/>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Work;