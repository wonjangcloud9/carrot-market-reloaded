import React from "react";

export default function Home() {
  return (
    <main className="bg-slate-100 sm:bg-red-100 md:bg-green-100 h-screen flex justify-center items-center p-5 ">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-2 md:flex-row">
        <input
          type="text"
          className="w-full bg-gray-200 rounded-full h-10 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          required
          placeholder="Search"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className="text-white py-2 rounded-full active:scale-90 transition-transform font-medium outline-none md:px-10 bg-black peer-required:bg-green-500">
          Search
        </button>
      </div>
    </main>
  );
}
