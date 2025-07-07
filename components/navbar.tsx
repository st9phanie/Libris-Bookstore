"use client";

import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="sticky top-0 z-50 bg-white shadow w-full">
            <nav className=" w-full">
                <div className="flex flex-col items-center">
                    {/* Top Navbar */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 gap-4">
                        {/* Logo */}
                        <Link href="/" className="cursor-pointer">
                            <div className="flex flex-row items-center text-[#132934]">
                                <p className="viaoda text-3xl font-semibold tracking-[1.2px]">Libris</p>
                            </div>
                        </Link>

                        {/* Search Bar */}
                        <div className="w-full md:w-[40%] flex flex-row gap-x-2">
                            <input
                                placeholder="Search"
                                className="px-4 py-2 w-full bg-[#eaeeef] border-2 border-[#eaeeef] text-black"
                            />
                            <button className="bg-[#0F99BB] px-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                                    <path
                                        fill="#fff"
                                        d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Icons */}
                        <div className="flex flex-row items-center gap-x-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-2 text-[#132934] cursor-pointer outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z" /></svg>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Link href="/profile">Profile</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <form method="POST" action="/auth/signout">
                                            <button type="submit" className="text-red-500 w-full text-left">
                                                Log out
                                            </button>
                                        </form>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Link href="/cart" className="cursor-pointer">
                                <div className="flex items-center text-[#132934]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="9.549" cy="19.049" r="1.701" /><circle cx="16.96" cy="19.049" r="1.701" /><path d="m5.606 5.555l2.01 6.364c.309.978.463 1.467.76 1.829c.26.32.599.567.982.72c.435.173.947.173 1.973.173h3.855c1.026 0 1.538 0 1.972-.173c.384-.153.722-.4.983-.72c.296-.362.45-.851.76-1.829l.409-1.296l.24-.766l.331-1.05a2.5 2.5 0 0 0-2.384-3.252zm0 0l-.011-.037a7 7 0 0 0-.14-.42a2.92 2.92 0 0 0-2.512-1.84C2.84 3.25 2.727 3.25 2.5 3.25" /></g></svg>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="text-sm text-[#132934] flex justify-between overflow-x-auto border-t w-full">
                        {[
                            { href: "/", label: "Home", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="m16 2.594l-.719.687l-13 13L3.72 17.72L5 16.437V28h9V18h4v10h9V16.437l1.281 1.282l1.438-1.438l-13-13zm0 2.844l9 9V26h-5V16h-8v10H7V14.437z" /></svg>` },
                            { href: "/books", label: "Books", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19.137A2.742 2.742 0 0 1 10 20H3.75A1.75 1.75 0 0 1 2 18.25V5.75C2 4.784 2.784 4 3.75 4H10c.788 0 1.499.331 2 .863A2.742 2.742 0 0 1 14 4h6.25c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H14a2.742 2.742 0 0 1-2-.863ZM3.5 5.75v12.5c0 .138.112.25.25.25H10c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25Zm9.25 11.5c0 .69.56 1.25 1.25 1.25h6.25a.25.25 0 0 0 .25-.25V5.75a.25.25 0 0 0-.25-.25H14c-.69 0-1.25.56-1.25 1.25v10.5Z" /></svg> ` },
                            { href: "/ebooks", label: "E-Books", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M3.5 5.75a.25.25 0 0 1 .25-.25H10c.69 0 1.25.56 1.25 1.25v8.959a6.49 6.49 0 0 1 1.5-2.646V6.75c0-.69.56-1.25 1.25-1.25h6.25a.25.25 0 0 1 .25.25v5.982A6.518 6.518 0 0 1 22 12.81V5.75A1.75 1.75 0 0 0 20.25 4H14c-.788 0-1.499.331-2 .863A2.742 2.742 0 0 0 10 4H3.75A1.75 1.75 0 0 0 2 5.75v12.5c0 .966.784 1.75 1.75 1.75H10c.495 0 .96-.13 1.36-.36a6.473 6.473 0 0 1-.343-1.663A1.248 1.248 0 0 1 10 18.5H3.75a.25.25 0 0 1-.25-.25V5.75Z" /><path d="M16.007 17c.04-1.415.248-2.669.553-3.585c.171-.513.364-.893.554-1.134c.195-.247.329-.281.386-.281c.057 0 .192.034.386.281c.19.241.383.62.554 1.134c.305.916.513 2.17.553 3.585h-2.986Zm-.396-3.9c.108-.323.23-.622.368-.887A5.504 5.504 0 0 0 12.023 17h2.984c.04-1.5.26-2.866.604-3.9Zm3.778 0a6.133 6.133 0 0 0-.368-.887A5.504 5.504 0 0 1 22.978 17h-2.985c-.04-1.5-.26-2.866-.604-3.9Zm.604 4.9h2.985a5.504 5.504 0 0 1-3.957 4.787c.138-.265.26-.564.368-.886c.345-1.035.564-2.4.604-3.901Zm-2.107 4.719c-.194.247-.329.281-.386.281c-.057 0-.191-.034-.386-.281c-.19-.241-.383-.62-.554-1.135c-.305-.915-.513-2.17-.553-3.584h2.986c-.04 1.415-.248 2.669-.553 3.584c-.171.514-.364.894-.554 1.135ZM12.023 18a5.504 5.504 0 0 0 3.956 4.787a6.133 6.133 0 0 1-.367-.886c-.346-1.035-.565-2.4-.605-3.901h-2.984Z" /></g></svg>` },
                            { href: "/audiobooks", label: "Audiobooks", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-8 8v2h2a2 2 0 0 1 2 2v3a3 3 0 1 1-6 0v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a3 3 0 1 1-6 0v-3a2 2 0 0 1 2-2h2v-2a8 8 0 0 0-8-8Z" clipRule="evenodd" /></svg> ` },
                            { href: "/offers", label: "SALE", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9l-7 7.02z" /><circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" /></svg>` },
                        ].map(({ href, label, icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`w-full  flex items-center gap-2 justify-center px-4 py-3 ${pathname === href
                                    ? "text-[#0F99BB] font-bold"
                                    : "hover:bg-gray-200 text-[#132934]"
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    dangerouslySetInnerHTML={{ __html: icon }}
                                />
                                <p>{label}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};
