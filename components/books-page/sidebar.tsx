"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface Genre {
    id: number;
    genre: string;
}

interface SidebarProps {
    genres: Genre[];
    selectedGenreIds: number[];
    onGenreChange: (genreId: number, checked: boolean) => void;
}

export const Sidebar = ({ genres, selectedGenreIds, onGenreChange }: SidebarProps) => {
    return (
        <div className="w-1/4 bg-[#fdfdfd] shadow-lg border-r px-10">
            <Accordion
                type="single"
                collapsible
                className="w-full text-right"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="">Genres</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance capitalize">
                        {genres.map((genre) => (
                            <div key={genre.id} className="flex items-center gap-3">
                                <Checkbox
                                    id={String(genre.id)}
                                    checked={selectedGenreIds.includes(genre.id)}
                                    onCheckedChange={(checked) =>
                                        onGenreChange(genre.id, Boolean(checked))
                                    }
                                />
                                <Label htmlFor={String(genre.id)}>{genre.genre}</Label>
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}