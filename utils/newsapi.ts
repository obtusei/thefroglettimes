import useSWR from "swr"
import axios from "axios"


const url =  "https://djangohosting.pythonanywhere.com/api"
const fetcher = (url:string)=> axios.get(url).then(res => res.data)

export const GetCategories = () => {
    const { data, error } = useSWR(`${url}/news/info/category`, fetcher)
    return {
      categories:data,
      isLoading: !error && !data,
      isError:error
    }

}

export const MainPageNews = ({section,language,region}:{section:string,language:string,region:string}) => {
    const { data, error } = useSWR(`${url}/news/all?section=${section}&language=${language}&region=${region}`, fetcher)
    return {
      categories:data,
      isLoading: !error && !data,
      isError:error
    }
}

export const GetNewsByCategory = ({id,language,region}:{id:number,language:string,region:string}) => {
    const { data, error } = useSWR(`${url}/news/all?category=${id}&language=${language}&region=${region}`, fetcher)
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