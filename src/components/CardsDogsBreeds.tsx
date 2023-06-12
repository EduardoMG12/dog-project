"use client"
import  {fetchBreeds ,  IBreed } from '@/utils/req';
import React, { useEffect, useState } from 'react'
import SearchForm from './SearchForm';
import Link from 'next/link';
import Image from 'next/image';

const DogBreeds = () => {

  const [dogBreeds, setDogBreeds] = useState<IBreed[] | void>();
  const [showDogBreeds, setShowDogBreeds] = useState<IBreed[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [dogNumbers, setDogNumbers] = useState(10)

 useEffect(() => {
  const getData = async () => {
    const data = await fetchBreeds()
    if(data){
      setDogBreeds(data)
      setLoading(false)
    }
    else{
      setLoading(false);
    }
  }
  getData()
  }, []);
  
  useEffect(() => {
    setShowDogBreeds(dogBreeds?.slice(0, dogNumbers));
  }, [dogBreeds, dogNumbers]);
  
  const loadMoreBreeds = () => {
    setDogNumbers(dogNumbers + 10)
  };

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
    <div className="w-full flex items-end flex-col gap-5">
    <SearchForm className='hidden'/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {showDogBreeds?.map((breedDog: IBreed) => (
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
          />
          <p className="text-xl">{breedDog.name}</p>
          <p className="w-3/4 text-sm text-center">{breedDog.bred_for}</p>
        </Link>
      ))}
    </div>
      <button onClick={() => loadMoreBreeds()} className="self-center px-5 py-3 text-cyan-700 flex justify-center items-center rounded-xl bg-dark-background font-bold my-10">
        <p className="text-dark-text">Loading more dogs</p>
      </button>
  </div>
  )
}

export default DogBreeds