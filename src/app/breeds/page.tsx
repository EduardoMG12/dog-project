/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import fetchData, { IApiResponse } from "../../utils/req";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

export const BreedsPage = () => {
  const [dogBreeds, setDogBreeds] = useState<IApiResponse[] | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const data = await fetchData();
        console.log(data);
        setDogBreeds(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching dog breeds:", error);
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    // Adicione a transparência no formato RGBA
    color += "36"; // 36 é o valor hexadecimal para 0.21 em decimal
  
    return color;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <section className="flex flex-col md:mx-32 gap-16">
        <h2
          className="mt-20 text-6xl font-bold"
          style={{
            letterSpacing: "0.205em",
            fontFamily: "'Fira Sans', sans-serif",
          }}
        >
          Breeds
        </h2>
        <p
          className="w-3/5 text-xl"
          style={{ fontFamily: "'Fira Sans', sans-serif" }}
        >
          In addition to presenting breeds and photos, our page is also a place
          where you can find amazing curiosities and helpful tips about dogs.
          Want to know why dogs wag their tails? Or maybe you're seeking
          guidance on training or health care? Here, you will find the answers
          to your most curious questions and the practical information you need.
          Feel free to explore, learn, and have fun on this page dedicated to
          our adorable canine companions. We are constantly updating our content
          to bring you new discoveries and keep you entertained. So, grab a cup
          of tea, get cozy, and dive into this world full of joy, tenderness,
          and lots of fun!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dogBreeds?.map((breeds: IApiResponse) =>
            breeds.breeds.map((breed) => (
              <Link
                href={`/${breed.id}`}
                key={breed.id}
                style={{
                  backgroundColor: generateRandomColor(),
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(4.7px)",
                  border: "1px solid rgba(255, 255, 255, 0.211)",
                }}
                className=" flex flex-col items-center gap-2 justify-center"
              >
                <Image
                  className="object-cover max-w-[200] max-h-[200] rounded-xl"
                  src={breeds.url}
                  width={200}
                  height={200}
                  alt="sadaw"
                ></Image>
                <p className="text-xl">{breed.name}</p>
                <p className="w-3/4 text-sm text-center">{breed.bred_for}</p>
              </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default BreedsPage;
