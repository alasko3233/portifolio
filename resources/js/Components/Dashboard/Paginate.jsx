import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "@inertiajs/react";
const Paginate = ({ links, prev, next }) => {
    const computedLinks = links.slice(1, -1); // Remove first and last items

    return (
        <div class="flex justify-center items-center mt-2">
            <nav
                class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
            >
                {prev === null ? (
                    <Link
                        preserveScroll
                        href="#"
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span class="sr-only">Previous</span>

                        <IoIosArrowBack className=" w-6 h-6" />
                    </Link>
                ) : (
                    <Link
                        preserveScroll
                        href={prev}
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span class="sr-only">Previous</span>

                        <IoIosArrowBack className=" w-6 h-6" />
                    </Link>
                )}

                {computedLinks.map((lien) => (
                    <Link
                        preserveScroll
                        key={lien.label}
                        href={lien.active ? "#" : lien.url}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 font-medium text-gray-700 hover:bg-gray-50 ${
                            lien.active
                                ? "bg-blue-400 border-t border-b border-indigo-400"
                                : "bg-white border border-gray-300"
                        }`}
                    >
                        {lien.label}
                    </Link>
                ))}

                {next === null ? (
                    <Link
                        preserveScroll
                        href="#"
                        class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span class="sr-only">Next</span>
                        <IoIosArrowForward className=" h-6 w-6" />
                    </Link>
                ) : (
                    <Link
                        preserveScroll
                        href={next}
                        class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span class="sr-only">Next</span>
                        <IoIosArrowForward className=" h-6 w-6" />
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default Paginate;
