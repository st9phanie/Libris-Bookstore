import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { supabase } from '@/lib/supabaseClient'
import { BannerCarousel } from "@/components/BannerCarousel";
import { BestsellersCarousel } from "@/components/BestsellersCarousel";

export default async function Home() {
  const { data: bookAuthorPairs, error } = await supabase
    .from('bookAuthor')
    .select(`bookId,
      authorId,
      books (
        id,
        title,
        year,
        cover_pic
      ),
      authors (
        id,
        firstname,
        lastname,
        middlename
      )
    `);
  if (error) {
    console.error('Error fetching book-author details:', error);
    return null;
  }


  return (
    <div className="">
      <BannerCarousel />
      <BestsellersCarousel bookAuthorPairs={bookAuthorPairs} />
    </div>
  )
}