import ProjectCard from "@/Components/Frontend/ProjectCard";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { useState } from "react";

const Project = () => {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category) => {
        setShowCard(category);
    };
    return (
        <>
            <FrontendLayout title="Projets">
                <>
                    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark w-screen">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full px-4">
                                    <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                        <span className="text-primary mb-2 block text-lg font-semibold">
                                            Our Portfolio
                                        </span>
                                        <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                                            Our Recent Projects
                                        </h2>
                                        <p className="text-body-color text-base dark:text-dark-6">
                                            There are many variations of
                                            passages of Lorem Ipsum available
                                            but the majority have suffered
                                            alteration in some form.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-wrap justify-center -mx-4">
                                <div className="w-full px-1">
                                    <ul className="flex flex-wrap lg:flex-nowrap justify-center mb-12 space-x-1">
                                        <li className="mb-1">
                                            <button
                                                onClick={() =>
                                                    handleProject("all")
                                                }
                                                className={`inline-block rounded-lg py-2 px-2 text-center text-base font-semibold transition md:py-3 lg:px-4 ${
                                                    showCard === "all"
                                                        ? "activeClasses bg-primary text-white"
                                                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                                }`}
                                            >
                                                All
                                            </button>
                                        </li>
                                        <li className="mb-1">
                                            <button
                                                onClick={() =>
                                                    handleProject("branding")
                                                }
                                                className={`inline-block rounded-lg py-2 px-2 text-center text-base font-semibold transition md:py-3 lg:px-4 ${
                                                    showCard === "branding"
                                                        ? "activeClasses bg-primary text-white"
                                                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                                }`}
                                            >
                                                Branding
                                            </button>
                                        </li>
                                        <li className="mb-1">
                                            <button
                                                onClick={() =>
                                                    handleProject("design")
                                                }
                                                className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-4 ${
                                                    showCard === "design"
                                                        ? "activeClasses bg-primary text-white"
                                                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                                }`}
                                            >
                                                Design
                                            </button>
                                        </li>
                                        <li className="mb-1">
                                            <button
                                                onClick={() =>
                                                    handleProject("marketing")
                                                }
                                                className={`inline-block rounded-lg py-2 px-2 text-center text-base font-semibold transition md:py-3 lg:px-4 ${
                                                    showCard === "marketing"
                                                        ? "activeClasses bg-primary text-white"
                                                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                                }`}
                                            >
                                                Marketing
                                            </button>
                                        </li>
                                        <li className="mb-1">
                                            <button
                                                onClick={() =>
                                                    handleProject("development")
                                                }
                                                className={`inline-block rounded-lg py-2 px-2 text-center text-base font-semibold transition md:py-3 lg:px-4 ${
                                                    showCard === "development"
                                                        ? "activeClasses bg-primary text-white"
                                                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                                }`}
                                            >
                                                Development
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="min-w-full flex flex-wrap ">
                                <ProjectCard
                                    ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
                                    category="Branding"
                                    title="Creative Agency"
                                    button="View Details"
                                    buttonHref="#"
                                    showCard={showCard}
                                />
                                <ProjectCard
                                    ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
                                    category="marketing"
                                    title="Creative Agency"
                                    button="View Details"
                                    buttonHref="#"
                                    showCard={showCard}
                                />
                                <ProjectCard
                                    ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
                                    category="marketing"
                                    title="Creative Agency"
                                    button="View Details"
                                    buttonHref="#"
                                    showCard={showCard}
                                />
                                <ProjectCard
                                    ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
                                    category="Development"
                                    title="Creative Agency"
                                    button="View Details"
                                    buttonHref="#"
                                    showCard={showCard}
                                />
                                <ProjectCard
                                    ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
                                    category="Design"
                                    title="Creative Agency"
                                    button="View Details"
                                    buttonHref="#"
                                    showCard={showCard}
                                />
                                <ProjectCard
                                    ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
                                    category="Marketing"
                                    title="Creative Agency"
                                    button="View Details"
                                    buttonHref="#"
                                    showCard={showCard}
                                />
                            </div>
                        </div>
                    </section>
                </>
            </FrontendLayout>
        </>
    );
};

export default Project;
