import Head from "next/head";
import Layout from "../components/Layout";

export default function ErrorPage(){
    return (
        <Layout>
            <Head>
                <title>ERROR | The Froglet Times</title>
                <meta name="description" content="This is online news portal app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex justify-center h-96 items-center">

                <h1>ERROR 404</h1>

            </div>

        </Layout>
    )
}