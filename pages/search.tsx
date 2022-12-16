import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router"
import { useState } from "react";
import Layout from "../components/Layout"
import { NewsCard } from "../components/News/Card";
import news from "../libs/news.json"
import { SearchAllNews } from "../utils/newsapi";
const Search = () => {

    const router = useRouter();
    const searchQuery = router.query.q;
    const [searchTerm,setSearchTerm] = useState(searchQuery);
    const tab = router.query.tab;
    const {news:searchedNews} = SearchAllNews(String(searchTerm),String(router.locale).toUpperCase())
   const {t}  = useTranslation("common")
    return(
        <Layout>
            <div className="p-4">
                <h1>{t("searchFor")}{searchQuery ? `" ${searchTerm}"`:"any news"}</h1>
                <form className="bg-red-200 flex justify-between">
                    <input type="search" name="search" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value);router.push(`?q=${searchQuery}&tab=news`)}} className="search w-full" id="" placeholder="Search News" />
                    <button type="submit" className="btn">{t("searchHead")}</button>
                </form>
            </div>
            

            <div className="p-4">            
            <div>
            <div className="grid grid-cols-4 py-4 gap-3">
                {
                    searchTerm != "" && searchedNews ?
                    (
                        searchedNews.length != 0  ?
                        searchedNews.map((content:any,index:any) => (
                        <div key={index} className={"col-span-2"}>
                            <NewsCard
                                id={content.id}
                                title={content.title}
                                description={content.content}
                                image={content.imageUrl}
                                publishedAt={content.published_at}
                            />
                        </div>
                    )):<>No News</>
                    ): 
                    <>{t("search")}</>
                }
            </div>
            </div>
            </div>
        </Layout>
    )
}

export default Search