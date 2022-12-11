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
            <h1>Search</h1>
            <input type="search" name="search" className="search" id="" placeholder="Search News" />
            <button className="btn">Search</button>
            

            <div className="p-4">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="mr-2">
                    <a href="#" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">News</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Users</a>
                </li>
            </ul>
            
            <div>
            <div className="grid grid-cols-4">
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