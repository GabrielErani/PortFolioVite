import "./MainPage.css";
import HeaderMainPage from "./HeaderMainPage";

  

const MainPage = () => {
    return (
       <>
        <HeaderMainPage />
        <section className="min-h-screen h-fit max-w-screen">
       <div className="flex justify-center items-center flex-col w-full">
        <h1 className="my-16 md:text-7xl text-3xl">Sobre Mim</h1>
        <span className="h-3 bg-blue-400 w-10 rounded-full mb-16"></span>
       </div>
        </section>
       </>
    );
};

export default MainPage;