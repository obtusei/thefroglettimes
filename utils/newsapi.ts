import useSWR from "swr"
import axios from "axios"


const url =  "https://djangohosting.pythonanywhere.com/api"
const fetcher = (url:string)=> axios.get(url).then(res => res.data)

export const GetCategories = () => {
    const { data, error } = useSWR(`/api/news/category`, fetcher)
    return {
      categories:data,
      isLoading: !error && !data,
      isError:error
    }

}

export const MainPageNews = ({cat,tag,language,region,take}:{cat?:string,tag?:string,language?:string,region?:string,take:number}) => {
  const newsURL = `/api/news/all/?tag=${tag}&take=${take}&lang=${language}&region=${region != "" ? region:"GENERAL"}`

    const { data, error } = useSWR(newsURL, fetcher)
    return {
      news:data,
      isLoading: !error && !data,
      isError:error
    }
}

export const GetByCategory = ({cat,language,take}:{cat?:string,tag?:string,language?:string,take:number}) => {
  const newsURL = `/api/news/allSec?cat=${cat}&take=${take}&lang=${language}`

    const { data, error } = useSWR(newsURL, fetcher)
    return {
      news:data,
      isLoading: !error && !data,
      isError:error
    }
}

export const SearchAllNews = (q:string,language?:string) => {
  const newsURL = `/api/news/search?q=${q}&lang=${language ? language:"EN"}`

    const { data, error } = useSWR(newsURL, fetcher)
    return {
      news:data,
      isLoading: !error && !data,
      isError:error
    }
}

export const SpecificNews = (id:string) => {
  const newsURL = `/api/news/one/?id=${id}`
    const { data, error } = useSWR(newsURL, fetcher)
    return {
      news:data,
      isLoading: !error && !data,
      isError:error
    }
}

export const GetNewsByCategory = ({id,language,region}:{id:number,language:string,region:string}) => {
    const { data, error } = useSWR(`https://djangohosting.pythonanywhere.com/api/news/all?category=${id}&language=${language}&region=${region}`, fetcher)
    return {
      categories:data,
      isLoading: !error && !data,
      isError:error
    }
}

export const SearchNews = ({id,language,region}:{id:number,language:string,region:string}) => {
    const { data, error } = useSWR(`${url}/news/all?category=${id}&language=${language}&region=${region}`, fetcher)
    return {
      categories:data,
      isLoading: !error && !data,
      isError:error
    }
}



export const loginTheUser = ({password,username}:any) => {
    axios.post(`${url}/users/login`,{username:username,password:password})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log("ERRRO"); 
    })
}