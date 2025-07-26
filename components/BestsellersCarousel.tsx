"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BookAuthorGenre } from "@/types/book"; // <-- Add this import

export const BestsellersCarousel = ({ bookAuthorPairs }: { bookAuthorPairs: BookAuthorGenre[] }) => {
  const router = useRouter()
  const handleBookClick = (bookId: number) => {
    router.push(`/books/${encodeURIComponent(bookId)}`)
  }
  return (
    <div className="w-full flex flex-col items-center px-10 my-10 ">
      <h2 className="text-3xl max-w-6xl font-[Verdana] text-center py-10 text-[#132934] bg-white w-full">
        Bestsellers
      </h2>

      <Carousel className="w-full max-w-6xl bg-white " opts={{ loop: true }}>
        <CarouselContent className="min-h-[320px]">
          {bookAuthorPairs.map((pair, key) => (
            <CarouselItem
              key={key}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 px-4 py-4 "
            >
              <div
                onClick={() => handleBookClick(pair.id)}
                className=" w-[170px] h-[300px] flex flex-col  p-4 hover:bg-gray-100 transition cursor-pointer">
                <Image
                  width={150}
                  height={200}
                  src={pair.cover_pic}
                  alt={pair.title}
                  className="h-[200px] w-auto object-cover shadow"
                />

                  <div className="truncate mt-3">
                    <p className="truncate font-semibold text-sm  text-[#132934] hover:overflow-visible hover:whitespace-normal hover:break-words">
                      {pair.title}
                    </p>
                    {pair.bookAuthor.map((author, key) => (
                      <p key={key} className="truncate text-xs text-gray-600 hover:overflow-visible hover:whitespace-normal hover:break-words">
                        {author.authors.firstname} {author.authors.middlename} {author.authors.lastname}
                      </p>
                    ))}
                  </div>
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
