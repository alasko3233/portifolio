import React, { useState } from "react";
import { motion } from "framer-motion";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { boomrag, lessor, peage, vignette, logo } from "@/Utility/image";
import {
    FaFacebook,
    FaGithub,
    FaLaravel,
    FaLinkedin,
    FaPlus,
    FaReact,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareGitlab } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const Section = (props) => {
    const { children } = props;

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1.4,
                    delay: 0.6,
                },
            }}
            className={` h-screen w-screen p-8 max-w-screen-2xl mx-auto
      flex flex-col items-start justify-center`}
        >
            {children}
        </motion.section>
    );
};

const Interface = () => {
    const navigation = [
        { name: "Accueil", href: "#" },
        { name: "About", href: "/about" },

        { name: "Project", href: "/project" },
        { name: "Contact", href: "/contact" },
    ];
    const skills = [
        {
            title: "Larvel",
            level: 80,
        },
        {
            title: "React Js",
            level: 70,
        },
        {
            title: "Vue JS",
            level: 60,
        },
        {
            title: "Django",
            level: 60,
        },
        {
            title: "flutter",
            level: 40,
        },
    ];
    const languages = [
        {
            title: "🇲🇱 Bambara",
            level: 100,
        },
        {
            title: "🇫🇷 French",
            level: 90,
        },
        {
            title: "🇺🇸 English",
            level: 40,
        },
    ];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    var settings = {
        className: "center flex item-center",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerPadding: "60px",
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className=" flex flex-col items-center w-screen ">
            <Section>
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav
                        className="flex items-center justify-between p-6 lg:px-8"
                        aria-label="Global"
                    >
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                {/* <span className="sr-only">Your Company</span> */}
                                <img className="h-8 w-auto" src={logo} alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                    <Dialog
                        as="div"
                        className="lg:hidden"
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                    >
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt=""
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>
                <div className="w-full pt-20 grid md:grid-cols-6 h-full items-center max-w-8xl justify-around">
                    <div className="lg:col-span-2 sm:pl-2 md:col-span-3 md:text-left text-center">
                        <div>
                            <h5 className="font-medium text-gray-600 dark:text-gray-200">
                                Hello Welcome
                            </h5>
                            <h1 className="sm:text-5xl text-4xl dark:text-white !leading-normal relative font-medium">
                                I'm{" "}
                                <span className="text-primary">
                                    Alhassane Diallo
                                </span>{" "}
                                <br />
                                Full Stack Developer
                            </h1>
                            <Link
                                href={route("contact")}
                                className="btn btn-filled mt-5"
                            >
                                <i className="fa-regular fa-envelope"></i>{" "}
                                contact me
                            </Link>
                            <Link
                                href={route("project")}
                                className="font-semibold dark:text-gray-200 border-b-2 border-gray-700 ml-4"
                            >
                                <i className="fa-solid fa-up-right-from-square"></i>{" "}
                                See Portfolio
                            </Link>
                        </div>
                        <div className="md:w-96 md:ml-auto flex mt-9 gap-2 dark:text-gray-300 lg:bg-gradient-to-l md:bg-none mt-2 bg-gradient-to-l dark:from-slate-800 from-gray-100">
                            <i className="fa-solid fa-border-all mt-0.5 md:inline-block hidden"></i>
                            <p className="text-lg text-balance leading-5 max-w-md px-2 mx-auto">
                                Passionate about crafting innovative and
                                impactful technological solutions, I have
                                developed strong expertise in designing,
                                developing, and maintaining high-quality web and
                                mobile applications.
                            </p>
                        </div>
                        <div className="flex items-center md:justify-end justify-center dark:text-gray-200 text-gray-600 gap-6 mt-9">
                            <p className="text-xs">Follow Us</p>
                            <div className="flex justify-end gap-3">
                                <a
                                    target="_blank"
                                    href="https://github.com/alasko3233"
                                    className="social-icon"
                                >
                                    <FaGithub className="h-6 w-6" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://gitlab.com/alasko3233"
                                    className="social-icon"
                                >
                                    <FaSquareGitlab className="h-6 w-6" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/alhassane-diallo-a71016179/"
                                    className="social-icon"
                                >
                                    <FaLinkedin className="h-6 w-6" />
                                </a>
                                <a
                                    href="mailto:contact@alhassane.ml"
                                    className="social-icon"
                                >
                                    <IoMdMail className="h-6 w-6" />
                                    {/* <FaFacebook className="h-6 w-6" /> */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-3">
                        {/* <img
              src="/image/person.png"
              className="w-2/3 mx-auto md:w-full max-w-96 md:mt-0 mt-5"
              alt=""
            /> */}
                    </div>
                    <div className="lg:col-span-2 md:col-span-6 lg:bg-gradient-to-l md:bg-none mt-2 bg-gradient-to-l dark:from-slate-800 from-gray-100 lg:h-96 md:h-auto h-96 w-full">
                        <ul className="text-2xl data-[slot=count]:*:text-3xl data-[slot=count]:*:font-bold leading-[3.14rem] text-center pt-5 lg:block md:flex items-center justify-between">
                            <li data-slot="count">4+</li>
                            <li>
                                Year of{" "}
                                <span className="text-primary">Experience</span>
                            </li>
                            <br />
                            <li data-slot="count">3+</li>
                            <li>
                                Completed{" "}
                                <span className="text-primary">Projects</span>
                            </li>
                            <li>
                                <button className="btn btn-outline lg:mt-10 md:mt-0 mt-10">
                                    <i className="fa-solid fa-download"></i>{" "}
                                    Download CV
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="grid px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">

            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              I'm Developer full Stack
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              passionate about creating innovative and effective technological
              solutions. I have acquired solid expertise in the design,
              development and maintenance of high quality web and mobile
              applications.
            </p>
            <div className=" flex gap-8 justify-start my-2 items-center">
              <a href="#" className=" w-12 h-12">
                <img src={facebook} alt="" />
              </a>
              <a href="#" className=" w-12 h-12">
                <img src={WhatsApp} alt="" />
              </a>
              <a href="#" className=" w-12 h-12">
                <img src={gmail} alt="" />
              </a>
              <a href="#" className=" w-12 h-12">
                <img src={linkedin} alt="" />
              </a>
            </div>
            <a
              href="#"
              className="inline-flex mt-3 items-center justify-center px-8 py-3 text-base font-medium text-center text-gray-900 border bg-blue-500 border-gray-300 rounded-lg hover:bg-blue-300 focus:ring-4 focus:ring-gray-100s dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact
            </a>
          </div>
          <div className="hidden z-0 lg:mt-0 lg:col-span-5 lg:flex lg:items-center lg:justify-center">
            <div class="e db al z  2xl:ud-absolute 2xl:ud-bottom-0 2xl:ud-right-40">
              <span class="d pn r nn">
                <svg
                  width="40"
                  height="38"
                  viewBox="0 0 40 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.31451 3.18282L32.4926 6.24789C36.3084 6.75249 38.147 11.1986 35.8021 14.2508L21.5587 32.7911C19.2138 35.8434 14.444 35.2126 12.9731 31.6558L4.03852 10.0504C2.56762 6.49355 5.49873 2.67822 9.31451 3.18282Z"
                    stroke="#4A6CF7"
                    stroke-width="6"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div> */}
            </Section>
            <Section>
                <motion.div
                    whileInView={"visible"}
                    className=" w-full flex justify-between mb-10 px-8"
                >
                    <div className=" w-1/3 ">
                        <h2 className="text-5xl font-bold">Skills</h2>
                        <div className=" mt-8 space-y-4">
                            {skills.map((skill, index) => (
                                <div className="w-64" key={index}>
                                    <motion.h3
                                        className="text-xl font-bold text-gray-800"
                                        initial={{
                                            opacity: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 1 + index * 0.2,
                                                },
                                            },
                                        }}
                                    >
                                        {skill.title}
                                    </motion.h3>
                                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                        <motion.div
                                            className="h-full bg-blue-500 rounded-full "
                                            style={{ width: `${skill.level}%` }}
                                            initial={{
                                                scaleX: 0,
                                                originX: 0,
                                            }}
                                            variants={{
                                                visible: {
                                                    scaleX: 1,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 1 + index * 0.2,
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="">
                            <h2 className="text-5xl font-bold mt-10">
                                Languages
                            </h2>
                            <div className=" mt-8 space-y-4">
                                {languages.map((lng, index) => (
                                    <div className="w-64" key={index}>
                                        <motion.h3
                                            className="text-xl font-bold text-gray-800"
                                            initial={{
                                                opacity: 0,
                                            }}
                                            variants={{
                                                visible: {
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 2 + index * 0.2,
                                                    },
                                                },
                                            }}
                                        >
                                            {lng.title}
                                        </motion.h3>
                                        <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                            <motion.div
                                                className="h-full bg-blue-400 rounded-full "
                                                style={{
                                                    width: `${lng.level}%`,
                                                }}
                                                initial={{
                                                    scaleX: 0,
                                                    originX: 0,
                                                }}
                                                variants={{
                                                    visible: {
                                                        scaleX: 1,
                                                        transition: {
                                                            duration: 1,
                                                            delay:
                                                                2 + index * 0.2,
                                                        },
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 hidden lg:flex justify-end items-center">
                        <div className=" w-full flex flex-col">
                            <h2 className="text-5xl text-center font-bold my-6">
                                Best Combo
                            </h2>
                            <div className="w-full flex flex-nowrap justify-center gap-4 ">
                                <FaLaravel className=" h-20 w-20 text-red-500" />
                                <FaPlus className=" w-8 h-8 text-black self-center" />
                                <FaReact className=" h-20 w-20 text-blue-500" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Section>
            <Section>
                {/* <h1 className=" text-4xl">Skillz Page</h1> */}
                <h2 class="mb-6 text-center text-3xl font-bold">
                    Projects we are proud of
                </h2>
                <div className=" flex flex-col w-full justify-center mb-10">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className=" self-center">
                                <div class=" p-6">
                                    <div
                                        class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src={peage}
                                            class="w-full min-h-64 max-h-64"
                                        />
                                        <a href="#!">
                                            <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                        </a>
                                    </div>
                                    <h5 class="mb-4 text-lg font-bold">
                                        Peage Mali
                                    </h5>
                                    <div class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            class="w-5 h-5 mr-2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                                            />
                                        </svg>
                                        Hot news
                                    </div>
                                    <p class="text-neutral-500 dark:text-neutral-300">
                                        The Toll Management Application aims to
                                        enhance efficiency, transparency, and
                                        speed in toll operations through two
                                        interfaces: a Business Interface for
                                        internal users (operators, supervisors)
                                        and a Public Interface for users. Key
                                        features include automated payment
                                        processing, real-time transaction
                                        tracking, secure online payments, and
                                        advanced reporting tools.
                                    </p>
                                </div>
                            </div>
                            <div className=" self-center">
                                <div class=" p-6">
                                    <div
                                        class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src={lessor}
                                            class="w-full min-h-64 max-h-64"
                                        />
                                        <a href="#!">
                                            <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                        </a>
                                    </div>
                                    <h5 class="mb-4 text-lg font-bold">
                                        L'essor Mali
                                    </h5>
                                    <div class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            class="w-5 h-5 mr-2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                                            />
                                        </svg>
                                        Hot news
                                    </div>
                                    <p class="text-neutral-500 dark:text-neutral-300">
                                        Lessor.ml is a digital platform focused
                                        on news and information for Mali and
                                        Africa, covering topics like business,
                                        society, sports, and culture. It
                                        provides subscription options for
                                        exclusive articles, in-depth reporting,
                                        and local job listings, creating a
                                        comprehensive resource for regional and
                                        international news.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div class=" p-6">
                                    <div
                                        class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src={vignette}
                                            class="w-full min-h-64 max-h-64"
                                        />
                                        <a href="#!">
                                            <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                        </a>
                                    </div>
                                    <h5 class="mb-4 text-lg font-bold">
                                        Vignettes
                                    </h5>
                                    <div class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            class="w-5 h-5 mr-2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                                            />
                                        </svg>
                                        Hot news
                                    </div>
                                    <p class="text-neutral-500 dark:text-neutral-300">
                                        Vignettes.ml is an online platform for
                                        managing vehicle tax payments in Mali.
                                        Users can easily pay their tax
                                        ("vignette") fees, verify the
                                        authenticity of their payment, and
                                        access related services through a simple
                                        interface. The platform also offers
                                        support for users needing assistance and
                                        is accessible via mobile app for added
                                        convenience
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div class=" p-6">
                                    <div
                                        class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src={boomrag}
                                            class="w-full min-h-64 max-h-64"
                                        />
                                        <a href="#!">
                                            <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                        </a>
                                    </div>
                                    <h5 class="mb-4 text-lg font-bold">
                                        Boomrag
                                    </h5>
                                    <div class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            class="w-5 h-5 mr-2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                                            />
                                        </svg>
                                        Hot news
                                    </div>
                                    <p class="text-neutral-500 dark:text-neutral-300">
                                        BoomRAG is an innovative solution
                                        combining natural language processing
                                        (NLP) and data science to optimize
                                        customer experience and data analysis.
                                        The application features an AI-powered
                                        chatbot for client interactions,
                                        advanced data management with a Neo4j
                                        database, and interactive graphical
                                        visualizations. It provides automated
                                        data logging and real-time responses,
                                        offering businesses a comprehensive tool
                                        for customer management, market
                                        analysis, and strategic decision-making
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Section>
            <Section>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-60 lg:mt-2">
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
                        <div class="flex items-center lg:mb-0 mb-10">
                            <div class="">
                                <h4 class="text-indigo-600 text-base font-medium leading-6 mb-4 lg:text-left text-center">
                                    Contact Us
                                </h4>
                                <h2 class="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                                    Reach Out To Us
                                </h2>
                                <input
                                    type="text"
                                    class="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                                    placeholder="Name"
                                />
                                <input
                                    type="email"
                                    class="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                                    placeholder="Email"
                                />
                                <textarea
                                    name=""
                                    id="text"
                                    class="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                                    placeholder="Phone"
                                ></textarea>
                                <button class="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Interface;
