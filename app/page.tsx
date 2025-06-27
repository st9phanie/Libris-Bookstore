import Link from "next/link";
import { BannerCarousel } from "@/components/BannerCarousel";
import { BestsellersCarousel } from "@/components/BestsellersCarousel";
import { getBestsellers } from "@/lib/getBestSellers";


export default async function Home() {
    const bestsellers = await getBestsellers();


  return (
    <div className="">
      <BannerCarousel />
      <BestsellersCarousel bookAuthorPairs={bestsellers} />
    </div>
  )
}