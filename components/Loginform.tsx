import Link from "next/link";
import React, { useState } from "react";

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen p-5 ">
      <div className="w-1/3 h-4/5 rounded-lg bg-gray-200 drop-shadow-lg">
        <div className="my-4">
          <h6 className="text-center tracking-widest text-sm sm:text-sm md:text-m font-tag">
            Welcome to
          </h6>
          <h5 className="text-center tracking-widest text-sm sm:text-m md:text-xl font-logo">
            The Froglet Times
          </h5>
        </div>
        <form className="font-body">
          <div className="relative mt-14 my-8 w-full">
            <label
              className="block uppercase text-sm  mb-2 mx-10 "
              htmlFor="grid-password"
            >
              Email Address
            </label>
            <input
              type="email"
              className="border-0 mx-10 px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring w-4/5"
              placeholder="Email"
              style={{ transition: "all .15s ease" }}
            />
          </div>
          <div className="relative my-8 w-full font-body">
            <label
              className="block uppercase   text-sm  mb-2 mx-10 "
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              type="password"
              className="border-0 mx-10 px-3 py-3  placeholder-gray-400  bg-white rounded text-sm shadow focus:outline-none focus:ring w-4/5"
              placeholder="Password"
              style={{ transition: "all .15s ease" }}
            />
          </div>
          <button
            className="bg-gray-900 mx-10 text-white acti   text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-4/5"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            Sign In
          </button>
          <p className="text-center my-4 text-m">
            Do you have an account?
            <Link href="/signup" className="text-blue-500 mx-1 cursor-pointer">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
