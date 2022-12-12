import Link from "next/link";
import { useRouter } from "next/router"
import { useState } from "react";
import Layout from "../components/Layout"
import { NewsCard } from "../components/News/Card";
import news from "../libs/news.json"
const Search = () => {

    const router = useRouter();
    const searchQuery = router.query.q;
    const [searchTerm,setSearchTerm] = useState(searchQuery);
    const tab = router.query.tab;
   
    return(
        <Layout>
            <div className="p-4">
                <h1>Search for {searchQuery ? `"${searchQuery}"`:"any news"}</h1>
                <form className="bg-red-200 flex justify-between">
                    <input type="search" name="search" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value);router.push(`?q=${searchQuery}&tab=news`)}} className="search w-full" id="" placeholder="Search News" />
                    <button type="submit" className="btn">Search</button>
                </form>
            </div>
            

            <div className="p-4">
            <ul className={`flex flex-wrap text-center text-gray-500 border-b border-gray-400 dark:border-gray-700 dark:text-gray-400`}>
                <li className="mr-2">
                    <Link href={`?q=${searchQuery}&tab=news`} shallow aria-current="page" className={`inline-block p-4 ${tab === "news" ? "text-black bg-gray-300 rounded-t-lg active dark:bg-gray-800 dark:text-white":"p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}`}>News</Link>
                </li>
                <li className="mr-2">
                    <Link href={`?q=${searchQuery}&tab=users`} shallow className={`inline-block p-4 ${tab === "users" ? "text-black bg-gray-300 rounded-t-lg active dark:bg-gray-800 dark:text-white":"p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}`}>Users</Link>
                </li>
            </ul>
            
            <div>
            <div className="grid grid-cols-4 py-4">
                {
                    tab === "news" ?
                    news.map((content,index) => (
                        <div key={index} className={"col-span-2"}>
                            <NewsCard
                                title={content.title}
                                description={content.description}
                                image={content.image}
                                publishedAt={content.published_at}
                            />
                        </div>
                    )):
                    news.map((content,index) => (
                        <div key={index} className={"col-span-2"}>
                            <NewsCard
                                title={content.title}
                                description={content.description}
                                publishedAt={content.published_at}
                            />
                        </div>
                    ))
                }
            </div>
            </div>
            </div>
        </Layout>
    )
}

export default Search