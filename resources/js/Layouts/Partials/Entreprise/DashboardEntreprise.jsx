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
    ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
export const datas = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};
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
export const option = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Departement",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Archiches Cloud",
            data: [1, 10, 25, 4, 30, 50, 20],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
            fill: true,
            label: "Archives Local",
            data: [1, 5, 15, 2, 40, 50, 20],
            borderColor: "rgb(53, 16, 23)",
            backgroundColor: "rgba(53, 1, 23, 0.5)",
        },
    ],
};
const DashboardEntreprise = ({
    archiveCloud,
    archiveLocal,
    departements,
    users,
}) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 my-5 mx-10">
                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-6">
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">
                                    {departements.length}
                                </div>
                            </div>
                            <div className="text-xl font-medium text-gray-400">
                                Departements
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
                    <div className="flex justify-between mb-6">
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">
                                    {users.length}
                                </div>
                            </div>
                            <div className="text-xl font-medium text-gray-400">
                                Employe
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
                                    {archiveLocal.length}
                                </div>
                                {/* <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                                    +30%
                                </div> */}
                            </div>
                            <div className="text-xl font-medium text-gray-400">
                                Archive Local
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
                                    {archiveCloud.length}
                                </div>
                                {/* <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                                    +30%
                                </div> */}
                            </div>
                            <div className="text-xl font-medium text-gray-400">
                                Archive Cloud
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
            <div className=" w-screen flex justify-center mx-10 gap-3">
                <div className=" w-2/3 bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5 ">
                    <Line options={options} data={data} />
                </div>
                <div className=" w-1/3 bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5 ">
                    <Doughnut data={datas} options={option} />
                </div>
            </div>
        </>
    );
};

export default DashboardEntreprise;
