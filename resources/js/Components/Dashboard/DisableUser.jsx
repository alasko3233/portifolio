import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { router } from "@inertiajs/react";
import { usePermission } from "@/Utility/Permissions";
import { MdDesktopAccessDisabled } from "react-icons/md";
import { FaDesktop } from "react-icons/fa6";
const DisableUser = ({ user }) => {
    const [open, setOpen] = useState(false);
    const { hasRole, hasPermission } = usePermission();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = async () => {
        // Logique de suppression de l'élément ici
        await router.visit(route("manage-users.show", user.id), {});

        console.log("Item deleted");
        setOpen(false);
    };
    return (
        <>
            {hasPermission("deleteUsers") ? (
                <>
                    <button
                        className=" bg-indigo-500    text-white active:bg-indigo-600
text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150
"
                        onClick={handleClickOpen}
                    >
                        {user.is_active === 1 ? (
                            <spam className="flex gap-3">
                                Desactiver
                                <MdDesktopAccessDisabled className="h-4 w-4 text-red-600 cursor-pointer" />
                            </spam>
                        ) : (
                            <spam className="flex gap-3">
                                Activer
                                <FaDesktop className="h-4 w-4 text-green-600 cursor-pointer" />
                            </spam>
                        )}
                    </button>
                </>
            ) : (
                <>
                    {/* Fragment pour Component B */}
                    <button
                        className=" bg-gray-500    text-white active:bg-indigo-600
text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150
"
                    >
                        <FaTrash className="h-4 w-4  cursor-pointer" />{" "}
                    </button>
                </>
            )}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmer la desactivation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {user.is_active === 1
                            ? "Êtes-vous sûr de vouloir désactiver cet utilisateur ?"
                            : "Êtes-vous sûr de vouloir activer cet utilisateur ?"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={handleDelete} color="success" autoFocus>
                        oui
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DisableUser;
