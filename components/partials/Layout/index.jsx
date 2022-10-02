import Head from "next/head"
import { useTheme } from "next-themes";
import { Header } from "../Header";
import { useEffect, useState } from "react";

const Layout = ({children, titlePage, metaDescription}) => {
    const title = titlePage ? `${titlePage} - Saiful Nakeusa` : "Saiful Nakeusa";
    
    return (  
        <>
            <Head>
                <title> {title} </title>
                <meta name="description" content={metaDescription} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="noise"></div>
            <Header />
            <main className="antialiased bg-white dark:bg-black pl-0 md:pl-20 overflow-hidden" id="main-container">
                {children}
            </main>

            {/* <Footer /> */}
        </>
    );
}
 
export default Layout;