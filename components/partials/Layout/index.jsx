import Head from "next/head"

const Layout = ({children, title = "Home"}) => {
    return (  
        <>
            <Head>
                <title>Saiful Nakeusa - {title} </title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>

            <div className="noise"></div>
            <header className="fixed left-0 top-0 right-0 overflow-hidden py-5 px-6 bg-transparent md:h-screen md:w-20 border-b md:border-r border-gray-200 z-50 flex md:flex-col justify-between ">
                <div className="w-full gap-y-10 flex md:flex-col flex-row items-center justify-between">
                    <a href="#" className="w-10 h-10">
                        <img src="/assets/svgs/logo.svg" className="w-full h-full" alt="logo-snakeusa" />
                    </a>
                    <div className="inline-flex gap-x-6 items-center">
                        <div className="block md:hidden">
                            <button className="bg-black w-6 h-6 rounded-full">
                            </button>
                        </div>
                        <button className="inline-flex flex-col gap-1.5 transition-all duration-200 ease-in-out cursor-pointer">
                            <div className="w-4 h-[3px] rounded-full bg-black ml-auto" />
                            <div className="w-8 h-[3px] rounded-full bg-black" />
                            <div className="w-4 h-[3px] rounded-full bg-black mr-auto" />
                        </button>
                    </div>
                </div>
                <div className="hidden md:block">
                    <button className="bg-black w-6 h-6 rounded-full">
                    </button>
                </div>
                <div className="hidden md:block">
                    UP
                </div>
            </header>
            <main className="antialiased bg-white pl-0 md:pl-20">
                {children}
            </main>

            {/* <Footer /> */}
        </>
    );
}
 
export default Layout;