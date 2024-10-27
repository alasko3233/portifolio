import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardAdmin from "@/Layouts/Partials/Admin/DashboardAdmin";
import DashboardSuperAdmin from "@/Layouts/Partials/SuperAdmin/DashboardSuperAdmin";
import { Head } from "@inertiajs/react";
import { useEffect } from "react";
import DashboardEmployee from "@/Layouts/Partials/Employee/DashboardEmployee";
import { usePermission } from "@/Utility/Permissions";

export default function Dashboard({ auth }) {
    const user_role = auth.user.data.roles[0];
    const { hasRole, hasPermission } = usePermission();
    useEffect(() => {
        console.log(user_role);
    }, []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tableau de Bord
                </h2>
            }
        >
            <Head title="Dashboard" />
            {hasRole("Super Admin") && <DashboardSuperAdmin />}
            {hasRole("Admin") && (
                <DashboardAdmin users={users} entreprises={entreprises} />
            )}
        </AuthenticatedLayout>
    );
}
