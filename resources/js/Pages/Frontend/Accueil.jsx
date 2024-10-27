import Interface from "@/Components/Threed/Interface";
import ThreedLayout from "@/Layouts/ThreedLayout";
import { Head } from "@inertiajs/react";
const Accueil = () => {
    return (
        <>
            <Head title="Accueil" />

            <ThreedLayout>
                <Interface />
            </ThreedLayout>
        </>
    );
};

export default Accueil;
