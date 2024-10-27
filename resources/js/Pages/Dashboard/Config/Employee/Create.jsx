import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Index = ({ auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        username: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
    });
    const [blockAction, setBlockAction] = useState(false);

    function submit(e) {
        e.preventDefault();
        setBlockAction(true);
        post("/manage-employee");
    }
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                        Ajouter Employee
                    </h2>
                }
            >
                <Head title="Ajouter Employee" />

                <div className="py-12 px-2">
                    <div className="p-4  sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className=" container p-10">
                            <form onSubmit={submit}>
                                <div className="space-y-12">
                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                                            Profile
                                        </h2>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            This information will be displayed
                                            publicly so be careful what you
                                            share.
                                        </p>

                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-4">
                                                <label
                                                    htmlFor="username"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Username
                                                </label>
                                                <div className="mt-2">
                                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                                            workcation.com/
                                                        </span>
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "username",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                data.username
                                                            }
                                                            id="username"
                                                            autoComplete="username"
                                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="janesmith"
                                                        />
                                                    </div>
                                                    {errors.username && (
                                                        <div className=" text-red-400">
                                                            {errors.username}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                                            Personal Information
                                        </h2>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            Use a permanent address where you
                                            can receive mail.
                                        </p>

                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="firstname"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    First name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="firstname"
                                                        onChange={(e) =>
                                                            setData(
                                                                "firstname",
                                                                e.target.value
                                                            )
                                                        }
                                                        value={data.firstname}
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                {errors.firstname && (
                                                    <div className=" text-red-400">
                                                        {errors.firstname}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Last name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="lastname"
                                                        onChange={(e) =>
                                                            setData(
                                                                "lastname",
                                                                e.target.value
                                                            )
                                                        }
                                                        value={data.lastname}
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                {errors.lastname && (
                                                    <div className=" text-red-400">
                                                        {errors.lastname}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="sm:col-span-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Email address
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        onChange={(e) =>
                                                            setData(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                        value={data.email}
                                                        type="email"
                                                        autoComplete="email"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                {errors.email && (
                                                    <div className=" text-red-400">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Phone
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        onChange={(e) =>
                                                            setData(
                                                                "phone",
                                                                e.target.value
                                                            )
                                                        }
                                                        value={data.phone}
                                                        id="phone"
                                                        autoComplete="phone"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                {errors.phone && (
                                                    <div className=" text-red-400">
                                                        {errors.phone}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button
                                        type="button"
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                        onClick={() => {
                                            window.history.back();
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        disabled={blockAction}
                                        type="submit"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
