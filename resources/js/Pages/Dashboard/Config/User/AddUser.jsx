import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@inertiajs/react";
import { usePermission } from "@/Utility/Permissions";
const AddUser = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = anchorEl;
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { hasRole, hasType } = usePermission();
    return (
        <>
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    Ajouter
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    {hasRole("Entreprise") && (
                        <>
                            {hasType("Finance") && (
                                <>
                                    <MenuItem onClick={handleClose}>
                                        <Link
                                            href={route("manage-chefa.create")}
                                        >
                                            Chef d'agence
                                        </Link>
                                    </MenuItem>
                                    {/* <MenuItem onClick={handleClose}>
                                        <Link
                                            href={route("manage-chefd.create")}
                                        >
                                            Chef departement
                                        </Link>
                                    </MenuItem> */}
                                    {/* <MenuItem onClick={handleClose}>Employees</MenuItem> */}
                                </>
                            )}

                            {hasType("Sante") && (
                                <>
                                    <MenuItem onClick={handleClose}>
                                        <Link
                                            href={route("manage-chefa.create")}
                                        >
                                            Chef du Service
                                        </Link>
                                    </MenuItem>

                                    {/* <MenuItem onClick={handleClose}>Employees</MenuItem> */}
                                </>
                            )}
                        </>
                    )}
                    {hasRole("ChefA") && (
                        <>
                            {/* <MenuItem onClick={handleClose}>
                                <Link href={route("manage-employee.create")}>
                                    Employee
                                </Link>
                            </MenuItem> */}
                            <MenuItem onClick={handleClose}>
                                <Link href={route("manage-chefd.create")}>
                                    Chef departement
                                </Link>
                            </MenuItem>
                            {/* <MenuItem onClick={handleClose}>Employees</MenuItem> */}
                        </>
                    )}
                    {hasRole("ChefD") && (
                        <>
                            <MenuItem onClick={handleClose}>
                                <Link href={route("manage-employee.create")}>
                                    Employee
                                </Link>
                            </MenuItem>
                            {/* <MenuItem onClick={handleClose}>Employees</MenuItem> */}
                        </>
                    )}
                    {hasRole("ChefS") && (
                        <>
                            <MenuItem onClick={handleClose}>
                                <Link href={route("manage-employee.create")}>
                                    Employee
                                </Link>
                            </MenuItem>
                            {/* <MenuItem onClick={handleClose}>Employees</MenuItem> */}
                        </>
                    )}
                </Menu>
            </div>
        </>
    );
};

export default AddUser;
<></>;
