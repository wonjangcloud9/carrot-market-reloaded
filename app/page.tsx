import React from "react";

export default function Home() {
  return (
    <main className="bg-slate-100 sm:bg-red-100 md:bg-green-100 h-screen flex justify-center items-center p-5 ">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-4">
        {["Nico", "Me", "You", "Yourself"].map((person, index) => (
          <div key={index} className="flex items-center gap-5 ">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium">{person}</span>
            <div className="size-6 animate-bounce bg-red-500 text-white flex items-center justify-center rounded-full">
              <span>{index}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
