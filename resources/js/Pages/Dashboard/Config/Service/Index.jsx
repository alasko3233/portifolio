import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useEffect } from "react";
const Index = ({ auth, users }) => {
    useEffect(() => {
        console.log(users);
    }, []);

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                        Liste des Services
                    </h2>
                }
            >
                <Head title="Liste des Services" />

                <div class="flex justify-center w-full mb-8 overflow-hidden rounded-lg ">
                    <div class="w-4/5 overflow-x-auto">
                        <div className=" w-full flex justify-end my-6">
                            <Link
                                href={route("manage-service.create")}
                                className=" w-32 bg-slate-500 text-center p-2 rounded hover:bg-slate-400"
                            >
                                Add
                            </Link>
                        </div>
                        <table class="w-full">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th class="px-4 py-3">ID</th>
                                    <th class="px-4 py-3">Nom du Service</th>

                                    <th class="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                {users.map((user, index) => {
                                    return (
                                        <tr class="text-gray-700">
                                            <td class="px-4 py-3 border">
                                                <div class="flex items-center text-sm">
                                                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                                        <img
                                                            class="object-cover w-full h-full rounded-full"
                                                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                                            alt=""
                                                            loading="lazy"
                                                        />
                                                        <div
                                                            class="absolute inset-0 rounded-full shadow-inner"
                                                            aria-hidden="true"
                                                        ></div>
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold text-black">
                                                            {user.id}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-4 py-3 text-ms font-semibold border">
                                                {user.name}
                                            </td>

                                            <td class=" flex justify-centerflex gap-5 items-center px-4 py-3 text-ms font-semibold border">
                                                <Link
                                                    href={route(
                                                        "manage-service.edit",
                                                        user
                                                    )}
                                                    class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    {" "}
                                                    <PencilIcon className=" w-5 h-5" />
                                                </Link>
                                                {/* <Link
                                                    class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    <TrashIcon className=" w-5 h-5" />
                                                </Link> */}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
