import { BestsellersCarousel } from "@/components/BestsellersCarousel";
import { getBookAuthorPairs } from "@/lib/getBookAuthorPairs";
import kids from "@/public/kids.jpg"
import ebook from "@/public/ebookbanner.jpg"
import stat from "@/public/stationery.jpg"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const bookAuthorPairs = await getBookAuthorPairs()

  return (
    <div className="">
      <div className="bg-[#0F99BB] h-[300px] w-full p-8 gap-x-10 flex flex-row ">
        <div className="bg-white w-1/3 h-full flex flex-col place-items-center p-4 justify-between">
          <p className=" text-2xl ">25% OFF Children's Books</p>
          <Image
            src={kids}
            width={1000}
            height={1500}
            alt="kids"
            className="w-full h-[150px] object-cover mt-6"
          />
          <Link href="/books" className="place-self-end">
            <button className="transform -translate-y-11 z-10  text-[#132934] bg-white/80 p-2 cursor-pointer hover:bg-white/70">
              Learn more
            </button>
          </Link>
        </div>

        <div className="bg-white w-1/3 h-full flex flex-col place-items-center p-4 justify-between">
          <p className=" text-2xl "> Back to School Sale</p>
          <Image
            src={stat}
            width={800}
            height={1000}
            alt="kids"
            className="w-full h-[150px] object-cover mt-6"
          />
          <Link href="/stationery" className="place-self-end">
            <button className="transform -translate-y-11 z-10  text-[#132934] bg-white/60 p-2 cursor-pointer hover:bg-white/70">
              Learn more
            </button>
          </Link>
        </div>

        <div className="bg-white w-1/3 h-full flex flex-col place-items-center p-4 justify-between">
          <p className=" text-2xl  ">30% OFF select E-books</p>
          <Image
            src={ebook}
            width={500}
            height={1500}
            alt="kids"
            className="w-full h-[150px] object-cover mt-6"
          />
          <Link href="/ebooks" className="place-self-end">
            <button className="transform -translate-y-11 z-10  text-[#132934] bg-white/60 p-2 cursor-pointer hover:bg-white/70">
              Learn more
            </button>
          </Link>
        </div>
      </div>
      <BestsellersCarousel bookAuthorPairs={bookAuthorPairs} />
    </div>
  )
}