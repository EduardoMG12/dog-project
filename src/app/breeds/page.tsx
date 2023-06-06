"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import fetchData, { IBreed } from "../../utils/req";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import { Metadata } from "next";
import SearchForm from "@/components/SearchForm";

interface IParams {
  params: { id: string };
}

async function generateMetadata({ params }: IParams): Promise<Metadata> {
  return {
    title: "Breeds",
    description:
      "Discover a wide variety of dog breeds on our website. Browse through the beautifully designed cards showcasing different dog breeds. From popular breeds to rare ones, explore the characteristics, history, and unique features of each breed. Find your favorite breed and learn more about their temperament, size, and special care requirements. Get inspired and find your perfect furry companion with our extensive collection of dog breed cards.",
  };
}

export const BreedsPage = () => {
  const [dogBreeds, setDogBreeds] = useState<IBreed[] | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const data = await fetchData({pathApi: "v1/breeds"});
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
    color += "36";

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
        <div className="w-full flex items-end flex-col gap-5">
          <SearchForm/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dogBreeds?.map((breedDog: IBreed) => (
              <Link
                href={`/breeds/${breedDog.id}`}
                key={breedDog.id}
                style={{
                  backgroundColor: generateRandomColor(),
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(4.7px)",
                  border: "1px solid rgba(255, 255, 255, 0.211)",
                }}
                className=" flex flex-col items-center gap-2 justify-between"
              >
                <Image
                  className="rounded-t-2xl w-full"
                  src={breedDog.image.url}
                  width={200}
                  height={200}
                  alt="sadaw"
                  placeholder="blur"
                  blurDataURL={breedDog.image.url}
                ></Image>
                <p className="text-xl">{breedDog.name}</p>
                <p className="w-3/4 text-sm text-center">{breedDog.bred_for}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BreedsPage;
