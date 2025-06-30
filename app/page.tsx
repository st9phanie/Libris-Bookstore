import { BannerCarousel } from "@/components/BannerCarousel";
import { BestsellersCarousel } from "@/components/BestsellersCarousel";
import { getBookAuthorPairs } from "@/lib/getBookAuthorPairs";

export default async function Home() {
    const bookAuthorPairs = await getBookAuthorPairs()
  
  return (
    <div className="">
      <BestsellersCarousel bookAuthorPairs={bookAuthorPairs}/>
    </div>
  )
}