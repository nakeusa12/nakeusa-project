import Head from "next/head"
import { Header } from "../Header";

const Layout = ({children, title = "Home"}) => {
    return (  
        <>
            <Head>
                <title>Saiful Nakeusa - {title} </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="noise"></div>
            <Header />
            <main className="antialiased bg-white pl-0 md:pl-20 overflow-hidden" id="main-container">
                {children}
            </main>

            {/* <Footer /> */}
        </>
    );
}
 
export default Layout;