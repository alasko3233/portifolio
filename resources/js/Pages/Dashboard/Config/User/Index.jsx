import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Head, Link, router } from "@inertiajs/react";

import { useEffect, useState } from "react";

import Paginate from "@/Components/Dashboard/Paginate";
import axios from "axios";
import AddUser from "./AddUser";
import RoleEdit from "./RoleEdit";
import { Button } from "@mui/material";
import { usePermission } from "@/Utility/Permissions";
import DeleteUser from "./Delete";
const Index = ({
    auth,
    users,
    roles,
    departements,
    agences,
    employes,
    queryParams = null,
}) => {
    queryParams = queryParams || {};
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [files, setFiles] = useState(users);
    const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { hasRole, hasPermission } = usePermission();

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        console.log("searchFieldChanged", queryParams);
        console.log("query", value);
        performQuickSearch(queryParams);

        // router.get(route("project.index"), queryParams);
    };
    const accessRapide = (name, value) => {
        // Vérifiez si la clé existe dans queryParams
        if (queryParams.hasOwnProperty(name)) {
            // Si la valeur est un tableau et qu'elle est identique à la valeur actuelle dans queryParams, supprimez-la
            if (
                Array.isArray(value) &&
                JSON.stringify(queryParams[name]) === JSON.stringify(value)
            ) {
                delete queryParams[name];
            } else {
                // Sinon, mettez à jour la valeur
                queryParams[name] = value;
            }
        } else {
            // Si la clé n'existe pas, ajoutez-la avec la nouvelle valeur
            queryParams[name] = value;
        }
        console.log("accessRapide", queryParams);
        // router.get(route("project.index"), queryParams);
        router.get(route("manage-archivecloud.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };
    const handleClickOpen = (folder) => {
        setSelectedFolder(folder);
    };

    const handleClose = () => {
        setSelectedFolder(null);
    };
    const advanceSearch = () => {
        setIsAdvancedSearch(!isAdvancedSearch);
    };
    const search = () => {
        router.get(route("manage-archivecloud.index"), queryParams);
    };
    const DeleteItem = async (id) => {
        console.log("id", id);

        await router.get(route("manage-users.show", id), {});
        // await router.post(route("manage-users.destroy", id), {
        //     _method: "delete",
        // });
    };
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        // searchFieldChanged("name", query);
        // Appeler votre fonction de recherche avec la nouvelle requête
        // queryParams["name"] = query;
        searchFieldChanged("name", e.target.value);
        // performQuickSearch(queryParams);
    };

    // Fonction de recherche rapide
    const performQuickSearch = async (query) => {
        // Mettez en œuvre votre logique de recherche ici, par exemple, envoyer une requête au backend
        console.log("Effectuer une recherche avec la requête :", query);
        try {
            const response = await axios.get(route("usersearch"), {
                params: query,
            });
            console.log(response);
            setFiles(response.data.items);
        } catch (error) {
            console.error("Error fetching archives:", error);
            // Handle errors appropriately, e.g., display flash messages
        }
    };
    useEffect(() => {
        console.log("query router", users);
    }, []);
    const variants = {
        Expanded: { width: "40%" },
        notExpanded: { width: "90%" },
    };
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                        Liste des Utilisateurs
                    </h2>
                }
            >
                <Head title="Liste des Archives" />
                <div class="flex justify-center w-full mb-1 overflow-hidden rounded-lg ">
                    <div className=" w-4/5  bg-white p-3  flex flex-wrap justify-end items-center content-center my-2">
                        <AddUser />
                    </div>
                </div>

                <div class="flex justify-center w-full mb-1 overflow-hidden rounded-lg ">
                    <div class="w-4/5 overflow-x-auto">
                        <div className=" bg-white  flex justify-between p-2">
                            <div className=" flex gap-1">
                                <div>
                                    <select
                                        id="agences"
                                        name="agences"
                                        class="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                                        defaultValue={queryParams.agences}
                                        onChange={(e) =>
                                            searchFieldChanged(
                                                "agences",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="tous" selected="">
                                            Tous les agences
                                        </option>
                                        {agences.map((agence) => {
                                            return (
                                                <option value={agence.id}>
                                                    {agence.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <select
                                        id="departement"
                                        name="departement"
                                        class="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                                        defaultValue={queryParams.departement}
                                        onChange={(e) =>
                                            searchFieldChanged(
                                                "departement",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="tous" selected="">
                                            Tous les departements
                                        </option>
                                        {departements.map((departement) => {
                                            return (
                                                <option value={departement.id}>
                                                    {departement.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <select
                                        id="roles"
                                        name="roles"
                                        class="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                                        defaultValue={queryParams.roles}
                                        onChange={(e) =>
                                            searchFieldChanged(
                                                "roles",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="tous" selected="">
                                            Tous les Roles
                                        </option>
                                        {roles.map((role) => {
                                            return (
                                                <option value={role.name}>
                                                    {role.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div class="relative text-gray-600 mx-2 self-center">
                                    <input
                                        type="search"
                                        name="search"
                                        value={searchQuery}
                                        onChange={handleSearchChange} // Appeler la fonction handleSearchChange à chaque changement dans le champ de recherche
                                        placeholder="Search"
                                        className="bg-white border-sky-500 focus:outline-none focus:border-sky-500 h-8 px-5 pr-10 rounded-full text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <table class="w-full">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-300 uppercase border-b border-gray-600">
                                    <th class="px-4 py-3">ID</th>
                                    <th class="px-4 py-3">Username</th>
                                    <th class="px-4 py-3">Firstname</th>
                                    <th class="px-4 py-3">Lastname</th>
                                    <th class="px-4 py-3">Agence</th>
                                    <th class="px-4 py-3">Departement</th>
                                    <th class="px-4 py-3">Privileges</th>

                                    <th class="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            {files && (
                                <tbody class="bg-white">
                                    {files.data.map((user, index) => {
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
                                                                {user.email}
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
                                                <td class="px-4 py-3 text-xs border">
                                                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                        {" "}
                                                        {user.lastname}{" "}
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 text-xs border">
                                                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                        {user.agence
                                                            ? user.agence.name
                                                            : "N/A"}
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 text-xs border">
                                                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                        {user.departement
                                                            ? user.departement
                                                                  .name
                                                            : "N/A"}
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 text-xs text-center justify-center border">
                                                    <div className=" flex justify-center">
                                                        <RoleEdit
                                                            userId={user.id}
                                                        />
                                                    </div>
                                                </td>
                                                <td class=" flex justify-centerflex gap-5 items-center px-4 py-3 text-ms font-semibold border">
                                                    {hasPermission(
                                                        "modify employe"
                                                    ) ? (
                                                        <>
                                                            <Link
                                                                href={route(
                                                                    "manage-chefd.edit",
                                                                    user
                                                                )}
                                                                class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="button"
                                                            >
                                                                {" "}
                                                                <PencilIcon className=" w-5 h-5" />
                                                            </Link>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {/* Fragment pour Component B */}
                                                            <div
                                                                class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="button"
                                                            >
                                                                {" "}
                                                                <PencilIcon className=" w-5 h-5" />
                                                            </div>
                                                        </>
                                                    )}
                                                    <DeleteUser user={user} />
                                                    {/* <button
                                                        disabled={hasPermission(
                                                            "delete employe"
                                                        )}
                                                        onClick={() =>
                                                            DeleteItem(user.id)
                                                        }
                                                        className={`
                                                        ${
                                                            hasPermission(
                                                                "delete employe"
                                                            )
                                                                ? "bg-gray-500"
                                                                : "bg-indigo-500"
                                                        }  // Conditional background
                                                        text-white active:bg-indigo-600
                                                        text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                                                      `}
                                                        type="button"
                                                    >
                                                        <TrashIcon className=" w-5 h-5" />
                                                    </button> */}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            )}
                        </table>
                        <Paginate
                            links={files.links}
                            prev={files.prev_page_url}
                            next={files.next_page_url}
                        />
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
