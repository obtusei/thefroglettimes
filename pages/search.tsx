import { useRouter } from "next/router"
import Layout from "../components/Layout"
import { NewsCard } from "../components/News/Card";
import news from "../libs/news.json"
const Search = () => {

    const router = useRouter();
    const searchQuery = router.query.q;
    const tab = router.query.tab;
   
    return(
        <Layout>
            <div className="p-4">
                <h1>Search for {searchQuery ? `"${searchQuery}"`:"any news"}</h1>
                <div className="bg-red-200 flex justify-between">
                    <input type="search" name="search" className="search w-full" id="" placeholder="Search News" />
                    <button className="btn">Search</button>
                </div>
            </div>
            

            <div className="p-4">
            <ul className="flex flex-wrap text-center text-gray-500 border-b border-gray-400 dark:border-gray-700 dark:text-gray-400">
                <li className="mr-2">
                    <a href="?tab=users" aria-current="page" className="inline-block p-4 text-black bg-gray-300 rounded-t-lg active dark:bg-gray-800 dark:text-white">News</a>
                </li>
                <li className="mr-2">
                    <a href="?tab=users" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Users</a>
                </li>
            </ul>
            
            <div>
            <div className="grid grid-cols-4 py-4">
                {
                    news.map((content,index) => (
                        <div key={index} className={"col-span-2"}>
                            <NewsCard
                                title={content.title}
                                description={content.description}
                                image={content.image}
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