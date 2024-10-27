import { Head, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
const Index = ({ auth, regions, cercles, communes, paiements }) => {
    const { data, current_page, last_page, per_page, total } = paiements;
    const [paginationModel, setPaginationModel] = useState({
        page: current_page - 1,
        pageSize: per_page,
    });

    // Fonction pour gérer le changement de page
    const handlePageChange = (newPage) => {
        setPaginationModel((prevModel) => ({
            ...prevModel,
            page: newPage,
        }));

        router.get(
            route("paiement.index"),
            { page: newPage + 1 },
            { preserveState: true }
        );
    };
    const rows = data.map((p, index) => ({
        id: index + 1,
        num_chassis: p.num_chassis,
        prenom: p.Prenom,
        nom: p.nom,
        telephone: p.telephone,
        mode_payement: p.mode_payement,
        date_payement: p.date_payement,
        montant: p.tarif,
        statut: p.statut,
    }));

    const columns = [
        { field: "num_chassis", headerName: "N Châssis", width: 150 },
        { field: "prenom", headerName: "Prénom", width: 150 },
        { field: "nom", headerName: "Nom", width: 150 },
        { field: "telephone", headerName: "Téléphone", width: 150 },
        { field: "mode_payement", headerName: "Mode de Paiement", width: 180 },
        { field: "date_payement", headerName: "Date de Paiement", width: 200 },
        { field: "montant", headerName: "Montant", width: 120 },
        { field: "statut", headerName: "Statut", width: 120 },
        { field: "Action", headerName: "Action", width: 120 },
    ];
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Liste des Paiements
                    </h2>
                }
            >
                <Head title="Liste des Paiements" />
                <div className=" p-4">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className=" w-full flex justify-center text-xl text-center"
                            sx={{
                                width: "100%",
                                textAlign: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div className="text-xl">Recherche Avancée</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-1 my-2 mx-6">
                                <div className="">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Region
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <select
                                                id="departement"
                                                name="departement"
                                                class="w-full h-10 border-2  focus:outline-none  text-gray-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                                                // defaultValue={
                                                //     queryParams.departement
                                                // }
                                                // onChange={(e) =>
                                                //     searchFieldChanged(
                                                //         "departement",
                                                //         e.target.value
                                                //     )
                                                // }
                                            >
                                                <option
                                                    value="tous"
                                                    selected=""
                                                >
                                                    Tous les Regions
                                                </option>
                                                {regions.map((region) => {
                                                    return (
                                                        <option
                                                            value={region.id}
                                                        >
                                                            {region.nom_region}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Cercle
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <select
                                                id="departement"
                                                name="departement"
                                                class="w-full h-10 border-2  focus:outline-none  text-gray-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                                                // defaultValue={
                                                //     queryParams.departement
                                                // }
                                                // onChange={(e) =>
                                                //     searchFieldChanged(
                                                //         "departement",
                                                //         e.target.value
                                                //     )
                                                // }
                                            >
                                                <option
                                                    value="tous"
                                                    selected=""
                                                >
                                                    Tous les Cercles
                                                </option>
                                                {cercles.map((cercle) => {
                                                    return (
                                                        <option
                                                            value={cercle.id}
                                                        >
                                                            {cercle.nom_cercle}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Commune
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <select
                                                id="departement"
                                                name="departement"
                                                class="w-full h-10 border-2  focus:outline-none  text-gray-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                                                // defaultValue={
                                                //     queryParams.departement
                                                // }
                                                // onChange={(e) =>
                                                //     searchFieldChanged(
                                                //         "departement",
                                                //         e.target.value
                                                //     )
                                                // }
                                            >
                                                <option
                                                    value="tous"
                                                    selected=""
                                                >
                                                    Tous les Communes
                                                </option>
                                                {communes.map((commune) => {
                                                    return (
                                                        <option
                                                            value={commune.id}
                                                        >
                                                            {
                                                                commune.nom_commune
                                                            }
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center my-2 mt-5">
                                <button className=" w-1/3 bg-green-600 text-white text-lg rounded-xl focus:bg-green-500 ">
                                    {" "}
                                    Rechercher{" "}
                                </button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="  sm:p-8 bg-white shadow sm:rounded-lg">
                    <div className="flex justify-center w-full mb-4 overflow-hidden rounded-lg ">
                        <div style={{ height: 580, width: "100%" }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                slots={{
                                    toolbar: GridToolbar,
                                }}
                                pagination
                                page={paginationModel.page}
                                pageSize={paginationModel.pageSize}
                                rowCount={total}
                                paginationMode="server"
                                onPaginationModelChange={(newModel) =>
                                    handlePageChange(newModel.page)
                                }
                            />
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
