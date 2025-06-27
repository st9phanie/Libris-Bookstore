"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

interface BestsellersCarouselProps {
  bookAuthorPairs: {
    bookAuthorId: number;
    bookAuthor: {
      books: {
        title: string;
        year: string;
        cover_pic: string;
      };
      authors: {
        firstname: string;
        lastname: string;
        middlename: string;
      };
    };
  }[];
}

export const BestsellersCarousel = ({ bookAuthorPairs }: BestsellersCarouselProps) => {
  return (
    <div className="w-full flex flex-col items-center px-4">
      <h2 className="text-4xl viaoda text-center py-10 text-[#132934]">
        Bestsellers
      </h2>

      <Carousel className="w-full max-w-6xl" opts={{ loop: true }}>
        <CarouselContent className="min-h-[320px]">
          {bookAuthorPairs.map((pair) => (
            <CarouselItem
              key={pair.bookAuthorId}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 px-4 py-4"
            >
              <div className="flex flex-col items-center rounded-lg p-4 hover:bg-gray-100 transition">
                <Image
                  width={150}
                  height={250}
                  src={pair.bookAuthor.books.cover_pic}
                  alt={pair.bookAuthor.books.title}
                  className="h-[250px] w-auto object-cover rounded shadow"
                />
                <p className="font-semibold text-sm mt-3 text-center text-[#132934]">
                  {pair.bookAuthor.books.title}
                </p>
                <p className="text-xs text-gray-600 text-center">
                  by {pair.bookAuthor.authors.firstname}{" "}
                  {pair.bookAuthor.authors.middlename
                    ? `${pair.bookAuthor.authors.middlename} `
                    : ""}
                  {pair.bookAuthor.authors.lastname}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
