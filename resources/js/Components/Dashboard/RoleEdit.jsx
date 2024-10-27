import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IoEyeSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import { data } from "autoprefixer";
const RoleEdit = ({ userId }) => {
    const [open, setOpen] = useState(false);
    const [permissions, setPermissions] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const [userPermissions, setUserPermissions] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedPermissions((prevSelectedPermissions) =>
            prevSelectedPermissions.includes(value)
                ? prevSelectedPermissions.filter(
                      (permission) => permission !== value
                  )
                : [...prevSelectedPermissions, value]
        );
    };

    const handleClickOpen = async (userId) => {
        console.log("userrrrr", userId);
        try {
            const response = await axios.get(route("getRole"), {
                params: { userId: userId },
            });

            const permissionsData = response.data.permissions;
            const permissionsUserData = response.data.items.permissions;
            setPermissions(permissionsData);
            console.log("permissions", permissionsData);

            const permissionNames = permissionsData.map(
                (permission) => permission.name
            );
            const permissionUserNames = permissionsUserData.map(
                (permission) => permission.name
            );
            setUserPermissions(permissionsData);
            setSelectedPermissions(permissionUserNames);
            console.log("permissionNames", permissionNames);

            setOpen(true);
        } catch (error) {
            console.error("Error fetching archives:", error);
            // Handle errors appropriately, e.g., display flash messages
        }
    };

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(route("editRole"), {
                permissions: selectedPermissions,
                userId: userId,
            });
            await setOpen(false);
        } catch (error) {
            console.error("Error fetching archives:", error);
            // Handle errors appropriately, e.g., display flash messages
        }
    }
    const handleClose = () => {
        console.log("permissionNames", selectedPermissions);

        setOpen(false);
    };
    return (
        <>
            <IoEyeSharp
                className=" h-6 w-6 "
                onClick={async () => await handleClickOpen(userId)}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <h3 className="mb-4 font-semibold text-gray-900 ">
                            Privileges
                        </h3>
                        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            {permissions && (
                                <>
                                    {permissions.map((permission, index) => (
                                        <li
                                            key={index}
                                            className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                                        >
                                            <div className="flex items-center ps-3">
                                                <input
                                                    id={`vue-checkbox-${index}`}
                                                    type="checkbox"
                                                    value={permission.name}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                    checked={selectedPermissions.includes(
                                                        permission.name
                                                    )}
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                />
                                                <label
                                                    htmlFor={`vue-checkbox-${index}`}
                                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    {permission.name}
                                                </label>
                                            </div>
                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={submit} autoFocus>
                        Enregistrer
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default RoleEdit;
