"use client";
import DogLogo from "@/components/SVGs/DogLogo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import fetchData, { IApiResponse, IBreed } from "../../utils/req";

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

  if (loading) {
    return <p>Loading...</p>;
  }

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dogBreeds?.map((breeds: IApiResponse) =>
            breeds.breeds.map((breed) => <div key={breed.id}>{breed.name}</div>)
          )}
        </div>
      </section>
    </>
  );
};

export default BreedsPage;
