// import fetchData, { IBreed } from '@/utils/req';
import React, { FC } from "react";
import Header from "@/components/Header";
import DinamicDog from "@/components/DinamicDog";
import  {IBreed, fetchDinamicDogs } from "@/utils/req";

interface IParams {
  params: { id: string };
}

interface IPropsDinamicDogPage {
  params: { id: string };
  searchParams: { id: string };
}

export async function generateMetadata({ params }: IParams) {
  const getData = async () => {
    const dinamicDog = await fetchDinamicDogs(params.id)
    return dinamicDog
  };
  const dog = await getData()
  return {
    title: dog?.breeds[0].name,
    description:
      `${dog?.breeds[0].name} description`
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
