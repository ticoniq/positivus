import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from './ui/button';
import { CheckCircle } from "lucide-react";

function Price() {
  return (
    <>
      <section id="price font-inter" className="py-28">
        <div className="max-w-[57rem] space-y-5 px-[1.3] mb-14 mx-auto text-center">
          <h3 className="text-3xl font-bold md:text-5xl header-text">
            Choose Your Plan
          </h3>
          <p>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>
        <div className="container border-none shadow-none flex flex-col justify-center items-center gap-6 md:flex-row">
          <Card className="md:w-1/3 py-8">
            <CardContent className="space-y-5">
              <CardTitle className="text-darkColor text-2xl font-semibold">Free</CardTitle>
              <CardTitle className="text-darkColor text-4xl font-bold">$0</CardTitle>
              <CardDescription className="text-darkColor">
                Capture ideas and find them quickly
              </CardDescription>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">Sync unlimited devices</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">10 GB monthly uploads</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">200 MB max. note size</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">Customize Home dashboard <br /> and access extra widgets</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">Connect primary Google Calendar account</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">Add due dates, reminders, <br /> and notifications to your tasks</span>
              </article>
            </CardContent>
            <CardFooter className="pb-0">
              <Button className="bg-white border border-goldColor text-darkColor hover:text-white">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="md:w-1/3 bg-navyColor py-16">
            <CardContent className="space-y-5 text-white">
              <CardTitle className="text-2xl semibold">Personal</CardTitle>
              <CardTitle className="text-goldColor text-4xl">$11.99</CardTitle>
              <CardDescription className="text-white">
                Keep home and family on track
              </CardDescription>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-goldColor" />
                <span className="text-sm font-medium leading-6">Sync unlimited devices</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-goldColor" />
                <span className="text-sm font-medium leading-6">10 GB monthly uploads</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-goldColor" />
                <span className="text-sm font-medium leading-6">200 MB max. note size</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-goldColor" />
                <span className="text-sm font-medium leading-6">Customize Home dashboard <br /> and access extra widgets</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-goldColor" />
                <span className="text-sm font-medium leading-6">Connect primary Google Calendar account</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-goldColor" />
                <span className="text-sm font-medium leading-6">Add due dates, reminders, <br /> and notifications to your tasks</span>
              </article>
            </CardContent>
            <CardFooter className="pb-0">
              <Button className="bg-blueColor">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="md:w-1/3 py-8">
            <CardContent className="space-y-5">
              <CardTitle className="text-darkColor text-2xl font-semibold">Organization</CardTitle>
              <CardTitle className="text-darkColor text-4xl font-bold">$49.99</CardTitle>
              <CardDescription className="text-darkColor">
                Capture ideas and find them quickly
              </CardDescription>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">Sync unlimited devices</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">10 GB monthly uploads</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">200 MB max. note size</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">Customize Home dashboard <br /> and access extra widgets</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">Connect primary Google Calendar account</span>
              </article>
              <article className="flex items-center space-x-4">
                <CheckCircle className="text-darkColor" />
                <span className="text-sm font-medium leading-5 text-darkColor">Add due dates, reminders, <br /> and notifications to your tasks</span>
              </article>
            </CardContent>
            <CardFooter className="pb-0">
              <Button className="bg-white border border-goldColor text-darkColor hover:text-white">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  )
}

export default Price