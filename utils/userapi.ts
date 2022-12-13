import useSWR from "swr"
import axios from "axios"


const url =  "https://djangohosting.pythonanywhere.com/api/"
const registerTheUser = () => {
    axios.post(url,{withCredentials:true})
    .then((res) => {

    })
    .catch((err) => {
        console.log("ERRRO"); 
    })

}