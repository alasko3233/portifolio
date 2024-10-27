import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect } from "react";

const Edit = ({ auth, user, types }) => {
    useEffect(() => {
        console.log(user);
    }, []);

    const { data, setData, put, processing, errors } = useForm({
        name: user.name ? user.name : "",
        address: user.address ? user.address : "",
        phone: user.phone ? user.phone : "",
        type: user.type_apps_id ? user.type_apps_id : "",
    });
    function submit(e) {
        e.preventDefault();
        put(route("manage-company.update", user.id));
    }
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                        Modifier Compagnie
                    </h2>
                }
            >
                <Head title="Modifier Compagnie" />
                <div className="py-12 px-2">
                    <div className="p-4  sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className=" container p-10">
                            <form onSubmit={submit}>
                                <div className="space-y-12">
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
                                                    htmlFor="name"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        onChange={(e) =>
                                                            setData(
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                        value={data.name}
                                                        id="name"
                                                        autoComplete="given-name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                {errors.firstname && (
                                                    <div className=" text-red-400">
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Address
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        onChange={(e) =>
                                                            setData(
                                                                "address",
                                                                e.target.value
                                                            )
                                                        }
                                                        value={data.address}
                                                        id="address"
                                                        autoComplete="address"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                {errors.lastname && (
                                                    <div className=" text-red-400">
                                                        {errors.address}
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
                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="compagnie"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Type
                                                </label>
                                                <div className="mt-2">
                                                    <select
                                                        value={data.type}
                                                        onChange={(e) =>
                                                            setData(
                                                                "type",
                                                                e.target.value
                                                            )
                                                        }
                                                        name="type"
                                                        id="type"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    >
                                                        <option value="">
                                                            Selectionner
                                                        </option>
                                                        {types.map(
                                                            (type, index) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            type.id
                                                                        }
                                                                    >
                                                                        {
                                                                            type.name
                                                                        }
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                </div>
                                                {errors.type && (
                                                    <div className=" text-red-400">
                                                        {errors.type}
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

export default Edit;
