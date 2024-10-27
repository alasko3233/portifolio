import { usePage } from "@inertiajs/react";

export function usePermission() {
    const { props } = usePage();
    const user = props?.auth?.user?.data;

    const hasRole = (name) => user?.roles?.includes(name);
    const hasPermission = (name) => user?.permissions?.includes(name);
    const hasType = (name) => user?.type === name;

    return { hasRole, hasPermission, hasType };
}
