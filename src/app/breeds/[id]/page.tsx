// import fetchData, { IBreed } from '@/utils/req';
import React, { FC } from "react";
import Header from "@/components/Header";
import DinamicDog from "@/components/DinamicDog";
import { fetchDinamicDogs } from "@/utils/req";

interface IParams {
  params: { id: string };
}

interface IPropsDinamicDogPage {
  params: { id: string };
  searchParams: { id: string };
}

export async function generateMetadata({ params }: IParams) {
  const getData = async () => {
    const dinamicDog = await fetchDinamicDogs(params.id);
    return dinamicDog;
  };
  const dog = await getData();
  return {
    title: dog?.breeds[0].name,
    description: `Discover ${dog?.breeds[0].name}: a breed with unique traits, fascinating history, and adorable quirks. Whether you're seeking a loyal companion or an active playmate, ${dog?.breeds[0].name} is the perfect match. Learn about their appearance, temperament, and why they make a wonderful addition to any family.`,
  };
}

const DinamicDogPage: FC<IPropsDinamicDogPage> = ({ params, searchParams }) => {
  return (
    <>
      <Header />
      <section className="flex flex-col mx-8 md:mx-32 gap-16">
        <DinamicDog id={params.id} />
      </section>
    </>
  );
};

export default DinamicDogPage;
