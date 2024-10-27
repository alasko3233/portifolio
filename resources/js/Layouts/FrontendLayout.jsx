import Footer from "@/Components/Frontend/Footer";
import NavBar from "@/Components/Frontend/Navbar";
import NewsLetter from "@/Components/Frontend/NewsLetter";

const FrontendLayout = ({ children, title = "About", subtitle = "" }) => {
    return (
        <div className=" flex flex-col items-center w-screen ">
            <NavBar />
            <div class="mx-auto w-screen max-w-2xl text-center mt-10 border-b border-stroke">
                <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {title}
                </h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">{subtitle}</p>
            </div>
            {children}
            <NewsLetter />
            <Footer />
            {/* Placer les scripts ici */}
        </div>
    );
};

export default FrontendLayout;
