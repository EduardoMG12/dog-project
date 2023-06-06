/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "@/components/Header";
import { Metadata } from "next";
import DogBreeds from "@/components/DogBreeds";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  return {
    title: "Breeds",
    description:
      "Discover a wide variety of dog breeds on our website. Browse through the beautifully designed cards showcasing different dog breeds. From popular breeds to rare ones, explore the characteristics, history, and unique features of each breed. Find your favorite breed and learn more about their temperament, size, and special care requirements. Get inspired and find your perfect furry companion with our extensive collection of dog breed cards.",
  };
}

export const BreedsPage = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col mx-8 md:mx-32 gap-16">
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
          <DogBreeds />
      </section>
    </>
  );
};

export default BreedsPage;
