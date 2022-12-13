import React from "react";

type Props = {
  changeActive: () => void;
};

const Avatar = () => {
  return (
    <div className="container font-v">
      <div className="relative w-full font-body">
        <label
          className="block mb-2 text-sm uppercase dark:text-white "
          htmlFor="grid-image"
        >
          Upload Your Profile Picture
        </label>
        <input
          type="file"
          accept="image/*"
          name="avatar"
          className="border-0 px-3 py-3 w-full  placeholder-gray-400  bg-white rounded text-sm shadow  focus:ring cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Image"
          style={{ transition: "all .15s ease" }}
          required
        />
        <p className="mt-1 text-sm dark:text-gray-300" id="file_input_help">
          PNG, JPG (MAX. 800x400px).
        </p>
      </div>
    </div>
  );
};

export default Avatar;
