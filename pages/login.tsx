import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useState } from "react";
import LoginForm from "../components/Loginform";
import axios from "axios";
import Layout from "../components/Layout";

export default function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loginError,setLoginError] = useState(false)
  const {t} = useTranslation("register")
  const postRequest = async () => {
      const data = { username:email,password:password}
      axios.post(`https://djangohosting.pythonanywhere.com/api/login`,data)
      .then((res) => {
        
      })
      .catch((err) => {
        setLoginError(true)
      })
      
  }
  return (
    <Layout hideFooter hideNav>
      <div className="flex font-serif flex-col justify-center items-center h-screen">
      <div>
        <h1 className="font-logo text-3xl p-2"><Link href={"/"}>{t("logo")}</Link></h1>
      </div>
      <div className="border-2 border-black-500 p-3 py-5 w-1/3 flex flex-col">
        <h3 className="text-2xl">{t("login")}</h3>
        {
          loginError && <p className="text-red-600">{(t("loginError"))}</p>
        }
        <div className="mt-4 flex flex-col space-y-3">
          <div>
            <label className="mt-2">{t("email")}</label>
            <input type="email" name="" id="email" className="search w-full" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            
          </div>
          <div>
            <label className="">{t("password")}</label>
            <input type="password" name="" id="password" className="search w-full" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          </div>
          <button type="submit" className="btn w-full" onClick={postRequest}>{t("loginButton")}</button>
          <p className="text-center">{t("notAMember")}{" "}<Link href={"/signup"} className="text-green-700">{t("signup")}</Link></p>

        </div>
      </div>
    </div>
    </Layout>
  )
}
