// import fetchData, { IBreed } from '@/utils/req';
import React, { FC } from "react";
import Header from "@/components/Header";
import DinamicDog from "@/components/DinamicDog";
import fetchData, { IBreed } from "@/utils/req";

interface IParams {
  id: any;
  params: { id: string };
}

interface IPropsDinamicDogPage {
  params: IParams;
  searchParams: { id: string };
}

export async function generateMetadata({ params }: IParams) {
    const fetchBreeds = async () => {
      try {
        const data = await fetchData({pathApi: `v1/breeds/${params.id}`});
        return data
     } catch (error) {
        console.log("Error fetching dog breeds:", error);
      }
  };
  fetchBreeds()
  const dog = await fetchBreeds()
  return {
    title: dog?.name,
    description:
      `${dog?.name} description`,
  };
}


const DinamicDogPage: FC<IPropsDinamicDogPage> = ({ params, searchParams }) => {
  return (
    <>
      <Header />
      <section className="flex flex-col mx-8 md:mx-32 gap-16">
        <DinamicDog id={params.id}/>
      </section>
    </>
  );
};

export default DinamicDogPage;
