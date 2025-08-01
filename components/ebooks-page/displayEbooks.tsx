import { ebookAuthorGenre } from "@/types/ebook"
import Image from "next/image"

export const EbooksDisplay = ({ books }: { books: ebookAuthorGenre[] }) => {
  return (
    <div className="flex flex-wrap gap-x-10 w-full pt-8">
      {books.map((pair, key) => (
        <div
          key={key}
          className="flex flex-col items-start w-[150px] h-[300px] mb-5 cursor-pointer p-2 hover:bg-gray-200"
        >
          <Image
            width={150}
            height={200}
            src={pair.cover_pic}
            alt={pair.title}
            className="h-[200px] w-full object-cover"
          />
            <p className="font-bold text-sm truncate w-full mt-2 hover:overflow-visible hover:whitespace-normal hover:break-words">{pair.title}</p>
            {pair.ebookAuthor.map((author, key) => (
              <div key={key} className="text-xs text-gray-600 truncate w-full pb-1 flex flex-row gap-x-[2px] hover:overflow-visible hover:whitespace-normal hover:break-words">
                <p>{author.authors.firstname} </p>
                <p>{author.authors.middlename && `${author.authors.middlename} `}</p>
                <p>{author.authors.lastname}</p>
              </div>
            ))}
          
          <div className="flex flex-row mt-2 items-center justify-between w-full">
            <p className="text-[#0F99BB] text-base font-semibold">
              <span className="text-sm">$</span> {pair.price}
            </p>
            <button className="text-[#132934] hover:text-[#0F99BB] transition-colors">
              <svg className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7H4zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm3-14v3h-3v2h3v3h2v-3h3v-2h-3V7h-2zm-3 16c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1zm9 0c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1z" />
              </svg>
            </button>
          </div>

        </div>
      ))}
    </div>

  )
}