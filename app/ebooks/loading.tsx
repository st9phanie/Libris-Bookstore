"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-row w-full ">
            <div className="min-w-1/5 min-h-max bg-white border-r" >

            </div>
            <div className="flex flex-wrap gap-x-10 px-12 pt-30">
                {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className="flex flex-col space-y-3 basis-1/6">
                        <Skeleton className="h-[200px] w-[150px] rounded-none bg-[#EBEBE5]" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[150px] rounded-none bg-[#EBEBE5]" />
                            <Skeleton className="h-4 w-[150px] rounded-none bg-[#EBEBE5]" />
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}
