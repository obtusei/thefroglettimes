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


export const loginTheUser = ({password,username}:any) => {
    axios.post(`${url}/users/login`,{username:username,password:password})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log("ERRRO"); 
    })

}