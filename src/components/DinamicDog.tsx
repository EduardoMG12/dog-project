/* eslint-disable react/no-unescaped-entities */
"use client";
import fetchData, { IBreedWithImagesDinamic } from "@/utils/reqDinamicDog";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import GhostDog from "./SVGs/GhostDog";
import BalanceScale from "./SVGs/BalanceScale";
import ScaleHeight from "./SVGs/ScaleHeight";
import DogWithWithers from "./SVGs/DogWithWithers";

interface IPropsDinamicDog {
  id: string;
}

const DinamicDog: FC<IPropsDinamicDog> = ({ id }) => {
  const [dogBreed, setDogBreed] = useState<IBreedWithImagesDinamic>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const data = await fetchData({ pathApi: `v1/breeds/${id}` });
        const dog = await fetchData({
          pathApi: `v1/images/${data?.reference_image_id}`,
        });
        setDogBreed(dog);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching dog breeds:", error);
        setLoading(false);
      }
    };
    fetchBreeds();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-full flex flex-col justify-between items-center gap-16 2xl:gap-36">
      <h1 className="text-6xl font-bold">{dogBreed?.breeds[0].name}</h1>

      <Image
        className={`rounded-2xl `}
        blurDataURL={dogBreed?.url}
        src={dogBreed?.url}
        width={600}
        height={100}
        alt="sadaw"
        placeholder="blur"
      />

      <div className="flex w-full justify-around items-center">
        <div className="flex flex-col justify-center items-center gap-4 scale-50 2xl:scale-100">
          <BalanceScale />
          <p className="text-2xl">{dogBreed?.breeds[0].weight.metric} kgs</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 scale-50 2xl:scale-100">
          <ScaleHeight />
          <p className="text-2xl">
            {dogBreed?.breeds[0].height.metric} cm at the withers
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <GhostDog />
        <p className="text-2xl">
          {dogBreed?.breeds[0].life_span} years average life span
        </p>
      </div>

      <div className="flex justify-around items-center">
        <p className="w-2/4">
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
        <DogWithWithers />
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p>{dogBreed?.breeds[0].bred_for}</p>
        <p>{dogBreed?.breeds[0].breed_group}</p>
        <p>{dogBreed?.breeds[0].origin}</p>
        <p>{dogBreed?.breeds[0].temperament}</p>
      </div>
    </div>
  );
};

export default DinamicDog;
