import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Avatar from "./Avatar";

const BASE_URL = "http://djangohosting.pythonanywhere.com/api";

export default function SignupForm() {
  let router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get("username"),
      first_name: formData.get("first-name"),
      last_name: formData.get("last-name"),
      email: formData.get("email"),
      password: formData.get("password"),
      avatar: formData.get("avatar"),
    };
    console.log(data);
    try {
      const response = await axios.post(`${BASE_URL}/signup/`, data);
      if (response.status === 202) {
        // router.push("/");
        alert("Signup successful");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-5 ">
      <div className="flex flex-col md:w-1/3 justify-center items-center rounded-lg bg-gray-200 drop-shadow-lg p-8 gap-y-5">
        <div className="">
          <h6 className="text-center tracking-widest text-sm sm:text-sm md:text-m font-tag">
            Welcome to
          </h6>
          <h5 className="text-center tracking-widest text-sm sm:text-m md:text-xl font-logo">
            The Froglet Times
          </h5>
        </div>
        <form
          className="font-body  w-full flex flex-col justify-center items-center gap-y-5"
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
          <div className="grid grid-cols-2 content-evenly w-full gap-2">
            <div className="relative w-full">
              <label
                className="block uppercase text-sm "
                htmlFor="grid-password"
              >
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                className="border-0 w-full px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring"
                placeholder="First Name"
                style={{ transition: "all .15s ease" }}
                required
              />
            </div>
            <div className="relative w-full">
              <label
                className="block uppercase text-sm "
                htmlFor="grid-password"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                className="border-0 w-full px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring"
                placeholder="Last Name"
                style={{ transition: "all .15s ease" }}
                required
              />
            </div>
          </div>
          <div className="block m-auto relative w-full">
            <label className="block uppercase text-sm " htmlFor="grid-password">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="border-0 w-full px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring"
              placeholder="Email Address"
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
          <Avatar />
          <button
            className="bg-gray-900 text-white w-full   text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="submit"
            style={{ transition: "all .15s ease" }}
          >
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
}
