'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card';
import Image from "next/image";
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";

const obj = [
  {
    img: img1,
    text: "The Roxxon Age of Marvel Comics Begins!",
    btn: "IMMORTAL THOR",
  },
  {
    img: img2,
    text: "Storm & Magneto's Friendship",
    btn: "RESURRECTION OF MAGNETO",
  },
  {
    img: img3,
    text: "Meet Anti-Venom, Venom's Polar Opposite",
    btn: "CHARACTER CLOSE-UP",
  },
];

export default function Home() {
  return (
    <div className="w-full ">
      <Carousel className="w-full h-full m-auto" plugins={[Autoplay({ delay: 5000 })]}>

        <CarouselContent className="h-full">
          {obj.map((item, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="h-full relative">
                <Card className="h-full">
                  <CardContent className="relative">
                    {/* Image with responsive height */}
                    <Image
                      src={item.img}
                      alt="not-found"
                      priority
                      className="w-full h-[80vh] object-cover relative brightness-[43%]"
                    />
                    {/* Text and button on top of the image */}
                    <div className="absolute inset-0 xl:inset-36 flex flex-col items-start justify-center space-y-4  px-4 md:px-8">
                      <button className=" border border-white text-white px-3 text-sm md:text-md font-bold md:px-8 py-1">{item.btn}</button>
                      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        {item.text}
                      </p>
                      <button className="px-4 py-2 bg-red-600 -skew-x-12 text-white rounded">
                        Read More
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
