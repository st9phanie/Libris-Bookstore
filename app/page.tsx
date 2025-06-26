import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BannerCarousel } from "@/components/BannerCarousel";
import { BestsellersCarousel } from "@/components/BestsellersCarousel";
import { getBookAuthorPairs } from "@/lib/getBookAuthorPairs";


export default async function Home() {
    const bookAuthorPairs = await getBookAuthorPairs();


  return (
    <div className="">
      <BannerCarousel />
      <BestsellersCarousel bookAuthorPairs={bookAuthorPairs} />
    </div>
  )
}