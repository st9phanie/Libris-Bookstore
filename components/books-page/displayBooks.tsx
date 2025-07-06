// components/BooksDisplay.tsx
"use client"

import { useState } from "react";
import { BookAuthorGenre } from "@/types/book";
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { addToCart } from "@/lib/addToCart"; // Make sure this import points to your updated file

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 18;

export const BooksDisplay = ({ books, uid }: { books: BookAuthorGenre[], uid: string|null }) => {
  const router = useRouter()

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);

  const paginatedBooks = books.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

   const handleBookClick = (bookId:number) => {
    router.push(`/books/${encodeURIComponent(bookId)}`)
  }

  // New handler for adding to cart
  const handleAddToCartClick = async (bookId: number) => {
    if (!uid) {
      toast.error("Please log in to add items to your cart.");
      router.push('/login'); // Redirect to login page if not authenticated
      return;
    }

    // Pass '1' as quantityToAdd to increment by one, and 'book' as itemType
    const result = await addToCart(uid, bookId, 1);

    if (result.error) {
      console.error("Failed to add to cart:", result.error);
      toast.error("Failed to add to cart", {
        description: result.error.message || "An unexpected error occurred.",
        duration: 3000,
      });
    } else {
      toast.success("Added to cart!", {
        description: "The item has been added to your cart.",
        duration: 2000,
        action: {
          label: "View Cart",
          onClick: () => router.push('/cart'), 
        },
      });
      // Optionally, you might want to trigger a re-fetch of cart data
      // if you display a cart count or items elsewhere on the page.
    }
  };

  return (
    <div className="w-full h-full ">
      <div className="flex flex-wrap gap-x-10 pt-8">
        {paginatedBooks.map((book, key) => ( // Changed 'pair' to 'book' for clarity
          <div
            key={key}
            className="flex flex-col items-start w-[150px] h-[300px] mb-5 cursor-pointer p-2 hover:bg-gray-200"
          >
            <Image
              width={150}
              height={200}
              src={book.cover_pic}
              alt={book.title}
              onClick={() => handleBookClick(book.id)}
              className="h-[200px] w-full object-cover"
            />
            <p className="font-bold text-sm truncate w-full mt-2 hover:overflow-visible hover:whitespace-normal hover:break-words">{book.title}</p>
            {book.bookAuthor.map((author, idx) => (
              <div key={idx} className="text-xs text-gray-600 truncate w-full pb-1 flex flex-row gap-x-[2px] hover:overflow-visible hover:whitespace-normal hover:break-words">
                <p>{author.authors.firstname} </p>
                <p>{author.authors.middlename && `${author.authors.middlename} `}</p>
                <p>{author.authors.lastname}</p>
              </div>
            ))}
            <div className="flex flex-row mt-2 items-center justify-between w-full">
              <p className="text-[var(--primary-orange)] text-base font-semibold">
                <span className="text-sm">$</span> {book.price}
              </p>

              {/* Cart Icon Button */}
              <button
                className="text-[#132934] hover:text-[var(--primary-orange)] transition-colors cursor-pointer"
                onClick={() => handleAddToCartClick(book.id)} 
              >
                <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7H4zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm3-14v3h-3v2h3v3h2v-3h3v-2h-3V7h-2zm-3 16c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1zm9 0c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={currentPage === index + 1}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(index + 1);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};