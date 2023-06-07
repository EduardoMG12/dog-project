import Header from "@/components/Header";
import Dog404 from "@/components/SVGs/Dog404";
import React from "react";

const NotFound = () => {
  return (
    <main className="">
      <Header />
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <div className="relative bg-white-top404 h-3/4 w-full flex justify-center items-end">
          <div className="absolute -bottom-[7.3rem] flex flex-col items-center justify-center gap-8">
            <Dog404 />
            <h1 className="text-5xl font-bold">page not found</h1>
          </div>
        </div>
        <div className="bg-white-bottom404 h-1/4 w-full"></div>
      </section>
    </main>
  );
};

export default NotFound;
