import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';

function Services() {

  const card = [
    { 
      id: 1,
      title: 'Search engine optimization',
      image: card1,
      color: 'bg-grayColor',
    },
    { 
      id: 2,
      title: 'Item 1',
      image: card2,
      color: 'bg-greenColor',
    },
    { 
      id: 3,
      title: 'Item 1',
      image: card3,
      color: 'bg-darkColor',
    },
    { 
      id: 4,
      title: 'Item 1',
      image: card4,
      color: 'bg-grayColor',
    },
    { 
      id: 5,
      title: 'Item 1',
      image: card5,
      color: 'bg-greenColor',
    },
    { 
      id: 6,
      title: 'Item 1',
      image: card6,
      color: 'bg-darkColor',
    },
  ]
  
  return (
    <section className="container font-spaceGrotesk mb-10" id="services">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 gap-y-10">
        {card.map((item) => (
          <Card key={item.id} className={`rounded-[2rem] border border-darkColor boxShadow p-5 ${item.color}`}>
            <CardHeader className="flex flex-col sm:flex-row items- justify-between space-y-0">
              <span className="flex flex-col justify-between">
                <CardTitle className="max-w-36 text-xl bg-greenColor">{item.title}</CardTitle>
                <Button size="icon" className="bg-white rounded-full">
                  <Mail className={`h-4 w-4 text-black`} />
                </Button>
              </span>
              <Image src={item.image} className="self-center"  alt={card1}/>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Services;
