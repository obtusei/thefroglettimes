import useSWR from "swr"
import axios from "axios"
import { getCookie, setCookie } from 'cookies-next';

const url =  "https://djangohosting.pythonanywhere.com/api"
const fetcher = (url:string)=> axios.get(url).then(res => res.data)

export const GetSession = () => {
    const { data, error } = useSWR(`/api/user/session`, fetcher)
    return {
      userSession:data,
      isLoading: !error && !data,
      isError:error
    }
}

export const GetSessionDjango = () => {
    const token = getCookie("froglettimes")
    const fetcher = (url:string)=> axios.get(url,{headers:{"Authorization":`Token ${token}`}}).then(res => res.data)
    const { data, error } = useSWR(`https://djangohosting.pythonanywhere.com/api/users/profile/`, fetcher) 
    return {
      userSession:data,
      isLoading: !error && !data,
      isError:error
    }
}

export const Logout = () => {
    const token = getCookie("froglettimes");
    fetch('/api/auth/logout/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Token ${token}`
        },
        body:JSON.stringify("")
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export const createNews = ({title,imageUrl,content,category,region,language,userEmail}:any) => {
    const data = {
        title:title,
        content:content,
        imageUrl:imageUrl,
        category:category,
        region:region,
        language:language,
        userEmail:userEmail
    }

    fetch('/api/news/create', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}
export const createNewsDjango = ({title,thumbnail,author,content,category,region,reading_time,language,section}:any) => {
    const data = {
        title:title,
        content:content,
        author:author,
        thumbnail:thumbnail,
        category:category,
        region:region,
        language:language,
        reading_time:reading_time,
        section:section,
    }

    fetch('https://djangohosting.pythonanywhere.com/api/news/post/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

export const registerTheUser = ({password,password2,username,full_name}:any) => {
    const data = {
        password:password,
        password2:password2,
        username:username,
        full_name:full_name
    }
    fetch('https://djangohosting.pythonanywhere.com/api/users/register/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export const loginTheUser = ({password,username}:any) => {
    const data = {
        password:password,
        username:username
    }
    fetch('https://djangohosting.pythonanywhere.com/api/users/login/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data.token);
            if (data.token){
                setCookie('froglettimes', data.token);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}