"use client";
import DogLogo from "@/components/SVGs/DogLogo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import fetchData, { ApiResponse } from "../../utils/req";
import { GetStaticProps } from "next";

export const Breeds = async () => {
  const [breeds, setBreeds] = useState<ApiResponse>({
    breeds: [],
    categories: [],
    id: "",
    url: "",
  });

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const data = await fetchData();
        console.log(data);
        if (data) setBreeds({ ...data });
      } catch (error) {
        console.log("Erro ao buscar as raças:", error);
      }
    };

    fetchBreeds();
  }, []);
  return (
    <>
      <header className="w-full h-11 flex items-center">
        <div className="w-full px-32 flex flex-row items-center justify-between">
          <div className="flex justify-center items-center">
            <Link href={"/"}>
              <DogLogo fillLogo={"white"} />
            </Link>
          </div>
          <ul className="flex gap-8 text-xl items-center justify-center">
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>Breeds</Link>
            </li>
            <li>
              <Link href={""}>Random Photos</Link>
            </li>
          </ul>
        </div>
      </header>
      <section className="flex flex-col md:ml-32 gap-16">
        <div className="flex flex-col gap-8">
          <h2
            className="text-6xl font-bold"
            style={{ letterSpacing: "0.205em" }}
          >
            Breeds
          </h2>
          <p className="ml-12 text-xl w-2/3">
            In addition to presenting breeds and photos, our page is also a
            place where you can find amazing curiosities and helpful tips about
            dogs. Want to know why dogs wag their tails? Or maybe you&apos; re
            seeking guidance on training or health care? Here, you will find the
            answers to your most curious questions and the practical information
            you need. Feel free to explore, learn, and have fun on this page
            dedicated to our adorable canine companions. We are constantly
            updating our content to bring you new discoveries and keep you
            entertained. So, grab a cup of tea, get cozy, and dive into this
            world full of joy, tenderness, and lots of fun!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {breeds.breeds.map((breed) => (
            <div key={breed.id}>
              <p className="text-4xl bg-white-text text-black">
                {breed.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Breeds;
