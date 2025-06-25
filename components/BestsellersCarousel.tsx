"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel";
import Image from "next/image";

interface BestsellersCarouselProps {
    bookAuthorPairs: {
        books: {
            id: number;
            title: string;
            year: string;
            cover_pic: string;
        };
        authors: {
            id: number;
            firstname: string;
            lastname: string;
            middlename: string;
        };
    }[];
}

export const BestsellersCarousel = ({ bookAuthorPairs }: BestsellersCarouselProps) => {
    return (
        <div className="grid place-items-center w-full">
            <p className="text-3xl baskervville text-center my-10">Bestsellers</p>

            <Carousel className="w-full max-w-6xl" opts={{ loop: true }}>
                <CarouselContent className="min-h-[320px]">
                    {bookAuthorPairs.map((pair, key) => (
                        <CarouselItem
                            key={key}
                            className="flex flex-col items-center text-center px-6 basis-1/5"
                        >
                            <Image
                                width={150}
                                height={250}
                                src={pair.books.cover_pic}
                                alt={pair.books.title}
                                className="h-[250px] w-auto object-cover"
                            />
                            <p className="font-bold text-sm mt-2">{pair.books.title}</p>
                            <p className="text-xs text-muted-foreground">
                                by {pair.authors.firstname}{" "}
                                {pair.authors.middlename ? `${pair.authors.middlename} ` : ""}
                                {pair.authors.lastname}
                            </p>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};
