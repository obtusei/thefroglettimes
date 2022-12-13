import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import { type } from "os";

const BASE_URL = "http://djangohosting.pythonanywhere.com/api";

export default function SignupForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    try {
      const response = await axios.post(`${BASE_URL}/login/`, data);
      if (response.status === 202) {
        router.push("/");
        alert("Login successful");
      }
    } catch (error) {
      setError("Wrong username or password");
      return error;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-5">
      <div className="flex flex-col md:w-1/3 justify-center items-center rounded-lg bg-gray-200 drop-shadow-lg p-10 gap-y-10">
        <div className="">
          <h6 className="text-center tracking-widest text-sm sm:text-sm md:text-m font-tag">
            Welcome to
          </h6>
          <h5 className="text-center tracking-widest text-sm sm:text-m md:text-xl font-logo">
            The Froglet Times
          </h5>
        </div>
        <form
          className="font-body  w-full flex flex-col justify-center items-center gap-y-8"
          action="submitForm"
          onSubmit={handleSubmit}
        >
          <div className="block m-auto relative w-full">
            <label className="block uppercase text-sm " htmlFor="grid-password">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="border-0 w-full px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring"
              placeholder="Username"
              style={{ transition: "all .15s ease" }}
              required
            />
          </div>
          <div className="relative w-full font-body">
            <label
              className="block uppercase   text-sm  mb-2 "
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border-0 px-3 py-3 w-full  placeholder-gray-400  bg-white rounded text-sm shadow focus:outline-none focus:ring"
              placeholder="Password"
              style={{ transition: "all .15s ease" }}
              required
            />
          </div>
          <button
            className="bg-gray-900 text-white w-full   text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="submit"
            style={{ transition: "all .15s ease" }}
          >
            Sign In
          </button>
          {error ? (
            <p className="font-body text-sm text-red-500">{error}</p>
          ) : null}
          <p className="text-center text-m">
            Do you have an account?
            <Link href="/auth/signup" className="text-blue-500cursor-pointer">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
