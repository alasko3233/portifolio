import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Exemple",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Clients",
            data: [1, 10, 25, 4, 30, 50, 20],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
            fill: true,
            label: "Compagnie",
            data: [1, 5, 15, 2, 40, 50, 20],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 1, 235, 0.5)",
        },
    ],
};
const DashboardAdmin = ({ entreprises, users }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 my-5 mx-10">
                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-6">
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">
                                    {users.length}
                                </div>
                            </div>
                            <div className="text-xl font-medium text-gray-400">
                                Client
                            </div>
                        </div>
                    </div>

                    <a
                        href="#"
                        className="text-[#f84525] font-medium text-sm hover:text-red-800"
                    >
                        View
                    </a>
                </div>
                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-4">
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">
                                    {entreprises.length}
                                </div>
                                {/* <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                                    +30%
                                </div> */}
                            </div>
                            <div className="text-xl font-medium text-gray-400">
                                Companies
                            </div>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="text-[#f84525] font-medium text-sm hover:text-red-800"
                    >
                        View
                    </a>
                </div>
            </div>
            <div className=" w-full flex justify-center mx-10">
                <div className=" w-3/4  bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5 ">
                    <Line options={options} data={data} />;
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;
