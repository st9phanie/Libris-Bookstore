"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";


export const BannerCarousel = () => {
    const plugin = Autoplay({ delay: 3000, stopOnInteraction: false });

    return (
        <div className=" place-items-center">
            <Carousel className="w-full" opts={{ loop: true }} plugins={[plugin]}>
                <CarouselContent className="min-h-[300px]">
                    <CarouselItem className="bg-[#132934] px-0 py-0 flex flex-row place-items-center justify-center">
                        <Image
                            src="/slide1.png"
                            width={1300}
                            alt=""
                            height={300}
                        />

                    </CarouselItem>
                    <CarouselItem className="bg-[#281E2F]  px-0 py-0 flex flex-row place-items-center justify-center">
                        <Image
                            src="/slide2.png"
                            width={1300}
                            alt=""
                            height={300}
                        />

                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}