import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useState } from "react";
import LoginForm from "../components/Loginform";
import axios from "axios";
import Layout from "../components/Layout";

export default function SignUp() {

  const [fullName,setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {t} = useTranslation("register")
  const postRequest = async () => {
    try{
      const data = { fullName:fullName,username:email,password:password}
      const request = await axios.post(`https://djangohosting.pythonanywhere.com/api/login`,data)
      console.log(request.data)
    }
    catch{
      console.log("ERROR AAYO");
    }
  }
  return (
    <Layout hideFooter hideNav>
      <div className="flex font-serif flex-col justify-center items-center h-screen">
      <div>
        <h1 className="font-logo text-3xl p-2"><Link href={"/"}>{t("logo")}</Link></h1>
      </div>
      <div className="border-2 border-black-500 p-3 py-5 w-1/3 flex flex-col">
        <h3 className="text-2xl">{t("signup")}</h3>
        <div className="mt-4 flex flex-col space-y-3">
          <div>
            <label className="mt-2">{t("fullName")}</label>
            <input type="email" name="" id="firstName" className="search w-full" placeholder="John Doe" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="text-red-600">{(t("loginError"))}</p>
          </div>
          <div>
            <label className="mt-2">{t("username")}</label>
            <input type="email" name="" id="email" className="search w-full" placeholder="john123" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="text-red-600">{(t("loginError"))}</p>
          </div>
          <div>
            <label className="mt-2">{t("email")}</label>
            <input type="email" name="" id="email" className="search w-full" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="text-red-600">{(t("loginError"))}</p>
          </div>
          <div>
            <label className="">{t("password")}</label>
            <input type="password" name="" id="password" className="search w-full" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <p className="text-red-600">{(t("loginError"))}</p>
          </div>
          <button type="submit" className="btn w-full" onClick={postRequest}>{t("signup")}</button>
          <p className="text-center">{t("notAMember")}{" "}<Link href={"/login"} className="text-green-700">{t("loginButton")}</Link></p>

        </div>
      </div>
    </div>
    </Layout>
  )
}
