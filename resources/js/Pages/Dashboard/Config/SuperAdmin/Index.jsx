import DisableUser from "@/Components/Dashboard/DisableUser";
import RoleEdit from "@/Components/Dashboard/RoleEdit";
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
                        Liste des Super Admins
                    </h2>
                }
            >
                <Head title="Liste des Admin" />
                <div className="py-12 px-2">
                    <div className="p-4  sm:p-8 bg-white shadow sm:rounded-lg">
                        <div class="flex justify-center w-full mb-8 overflow-hidden rounded-lg ">
                            <div class="w-4/5 overflow-x-auto">
                                <div className=" w-full flex justify-end my-6">
                                    <Link
                                        href={route("manage-superadmin.create")}
                                        className=" w-32 bg-slate-500 text-center p-2 rounded hover:bg-slate-400"
                                    >
                                        Add
                                    </Link>
                                </div>
                                <table class="w-full">
                                    <thead>
                                        <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                            <th class="px-4 py-3">ID</th>
                                            <th class="px-4 py-3">Username</th>
                                            <th class="px-4 py-3">Firstname</th>
                                            <th class="px-4 py-3">Lastname</th>
                                            <th class="px-4 py-3">Email</th>
                                            <th class="px-4 py-3">
                                                Privileges
                                            </th>

                                            <th class="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white">
                                        {users.map((user, index) => {
                                            return (
                                                <tr class="text-gray-700">
                                                    <td class="px-4 py-3 border">
                                                        <div class="flex items-center text-sm">
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
                                                    <td class="px-4 py-3 text-ms font-semibold border">
                                                        {user.firstname}
                                                    </td>
                                                    <td class="px-4 py-3 text-ms font-semibold border">
                                                        {user.lastname}
                                                    </td>
                                                    <td class="px-4 py-3 text-ms font-semibold border">
                                                        {user.email}
                                                    </td>
                                                    <td class="px-4 py-3 text-ms font-semibold border">
                                                        <div className=" flex justify-center">
                                                            <RoleEdit
                                                                userId={user.id}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td class=" flex justify-centerflex gap-5 items-center px-4 py-3 text-ms font-semibold border">
                                                        <Link
                                                            href={route(
                                                                "manage-superadmin.edit",
                                                                user
                                                            )}
                                                            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                        >
                                                            {" "}
                                                            <PencilIcon className=" w-5 h-5" />
                                                        </Link>
                                                        <DisableUser
                                                            user={user}
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
