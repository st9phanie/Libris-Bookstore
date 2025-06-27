import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface SidebarProps {
  genres: { genre: string }[]
}


export const Sidebar = ({ genres }: SidebarProps) => {

    return (
        <div className="w-1/4 bg-[#fdfdfd] shadow-lg border-r">
            <Accordion
                type="single"
                collapsible
                className="w-full px-4"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Genres</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        {genres.map((genre, key) => (
                            <div key={key} className="flex items-center gap-3 text-gray-600">
                                <Checkbox id={genre.genre} />
                                <Label htmlFor={genre.genre}>{genre.genre}</Label>
                            </div>
                        ))
                        }
                    </AccordionContent>
                </AccordionItem>


            </Accordion>
        </div>
    )
}