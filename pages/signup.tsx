import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useState } from "react";
import LoginForm from "../components/Loginform";
import axios from "axios";
import Layout from "../components/Layout";
import { registerTheUser } from "../utils/userapi";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function SignUp() {

  const [fullName,setFullName] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const {t} = useTranslation("register")
  const postRequest = () => {
    try{
      const data = { fullname:fullName,email:username,password:password}
      fetch('/api/user', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.message){
              alert(data.message)
            }else{
              router.push("/login")
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      
    }
    catch{
      console.log("ERROR AAYO");
    }
  }
  const router = useRouter()
  const {data:session,status} = useSession();
  if (status === "loading"){
    return <></>
  }else if(status === "authenticated"){
    router.push("/")
  }else{
  return (
    <Layout hideFooter hideNav>
      <Head>
        <title>Sign Up | The Froglet Times</title>
        <meta name="description" content="This is online news portal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex font-serif flex-col justify-center items-center h-screen">
      <div>
        <h1 className="font-logo text-3xl p-2"><Link href={"/"}>{t("logo")}</Link></h1>
      </div>
      <div className="border-2 border-black-500 p-3 py-5 w-1/3 flex flex-col">
        <h3 className="text-2xl">{t("signup")}</h3>
        <div className="mt-4 flex flex-col space-y-3">
          <div>
            <label className="mt-2">{t("fullName")}</label>
            <input type="email" name="" id="firstName" className="search w-full" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            {/* <p className="text-red-600">{(t("loginError"))}</p> */}
          </div>
          <div>
            <label className="mt-2">{t("email")}</label>
            <input type="email" name="" id="email" className="search w-full" placeholder="example@example.com" value={username} onChange={(e) => setUsername(e.target.value)} />
            {/* <p className="text-red-600">{(t("loginError"))}</p> */}
          </div>
          <div>
            <label className="">{t("password")}</label>
            <input type="password" name="" id="password" className="search w-full" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            {/* <p className="text-red-600">{(t("loginError"))}</p> */}
          </div>
          <button type="submit" className="btn w-full" onClick={() => {
              postRequest();
            // registerTheUser({password:password,password2:password,username:username,full_name:fullName})
            alert("USER SUCCESSFULL CREATED");
            router.push("/login")
          }}>{t("signup")}</button>
          <p className="text-center">{t("notAMember")}{" "}<Link href={"/login"} className="text-green-700">{t("loginButton")}</Link></p>
        </div>
      </div>
    </div>
    </Layout>
  )
  } 
}
