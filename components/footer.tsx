import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link"
export const Footer = () => {
    return (
        <div className="">
            <Accordion
                type="single"
                collapsible
                className="w-full  "
                defaultValue="item-0"
            >
                <AccordionItem value="item-1">


                    <footer className="bg-[#142934] shadow shadow-sm border-white text-white px-10 ">
                        <AccordionTrigger className="justify-end text-[#0F99BB] size-6 mb-4  "></AccordionTrigger>
                        <AccordionContent className="">
                            <div className="flex flex-row items-center justify-between border-b py-4">
                                <p className=" ">Sign up to our newsletter and get the best deals!</p>
                                <div className="flex flex-row gap-x-2 w-1/3">
                                    <input className="bg-[#EBEBE5] max-h-min w-full text-gray-800 px-4 py-2" type="email" placeholder="Enter your email" />
                                    <button className="bg-[#0F99BB] min-w-max text-white px-4 py-2">Sign up</button>
                                </div>

                            </div>
                            <div className="py-4 flex flex-row justify-between">
                                <div className="flex flex-col ">
                                    <p className="text-2xl viaoda tracking-[1.2px]">Libris</p>
                                    <div className="pt-1 flex flex-row gap-x-2 items-center ">
                                        <Link href="https://www.instagram.com" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#EBEBE5" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z" /></svg>
                                        </Link>
                                        <Link href="https://www.facebook.com" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 20"><path fill="#EBEBE5" fillRule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0Z" /></svg>
                                        </Link>
                                        <Link href="https://www.tiktok.com" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#EBEBE5" d="M18.857 3H5.143A2.145 2.145 0 0 0 3 5.143v13.714C3 20.04 3.961 21 5.143 21h13.714A2.145 2.145 0 0 0 21 18.857V5.143A2.145 2.145 0 0 0 18.857 3m-1.712 7.853a3.17 3.17 0 0 1-1.822-.371a3.2 3.2 0 0 1-1.16-1.066v4.944a3.654 3.654 0 1 1-3.654-3.654c.076 0 .15.007.225.011v1.801c-.075-.009-.148-.023-.225-.023a1.865 1.865 0 1 0 0 3.73c1.03 0 1.94-.811 1.94-1.841l.018-8.398h1.723a3.21 3.21 0 0 0 2.957 2.865v2.002" /></svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-10  text-sm">
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold underline">Help</p>
                                        <Link href="/">FAQ</Link>
                                        <Link href="/">Customer Support</Link>
                                        <Link href="/">Gift Cards</Link>
                                        <Link href="/">Subscriptions</Link>

                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold underline">About</p>
                                        <Link href="/">About Libris</Link>
                                        <Link href="/">Careers</Link>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold underline">Contact</p>
                                        <p>+961 01123456</p>
                                        <Link href="/mailto:">info@libris.com</Link>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>

                    </footer >
                </AccordionItem>
            </Accordion>

            <div className="flex flex-row bg-gray-900 gap-x-6 items-center justify-center py-1 text-gray-400">
                <p className="text-center text-gray-300 text-[12px]">© Libris Bookstores, Inc </p>
                <p className="text-center text-gray-300 text-[12px]">Privacy Policy</p>
                <p className="text-center text-gray-300 text-[12px]">Terms of Service</p>
                <p className="text-center text-gray-300 text-[12px]">Sitemap</p>
            </div>
        </div >
    )
}