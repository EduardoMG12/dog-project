/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import SvgContainer from "@/components/SVGs/SvgContainer";
import Header from "@/components/Header";


export default function Home() {
  return (
    <>
      <Header/>
      <section className="h-screen flex justify-between flex-col gap-10 2xl:flex-row">
        <div className="w-1/2 mx-8 md:mx-32">
          <h1 className="text-5xl md:text-8xl mt-32" style={{ letterSpacing: "0.285em" }}>
            NAMELOGO
          </h1>
          <h2 className="text-xl w-full md:text-2xl mt-16" style={{ letterSpacing: "0.215em" }}>
            conhecendo mais sobre seu fiel companheiro
          </h2>
          <div className="mt-11 w-full relative h-96 hidden xl:block">
            <SvgContainer />
          </div>
        </div>
        <div className=" h-full flex items-center justify-center w-full 2xl:w-1/2">
          {/* <div className="mt-4 h-3/4 w-full" style={{borderRadius:"1600px 1000px 800px 1800px / 1600px 100px 550px 650px", backgroundImage: "url(https://unsplash.com/photos/2l0CWTpcChI)"}}></div> */}
          <Image
            className="mb-10 mt-4 h-full w-full  2xl:block"
            alt="dog image"
            width={1000}
            height={1000}
            style={{
              
              borderRadius:
                "1600px 1000px 800px 1800px / 1600px 100px 550px 650px",
            }}
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          />
        </div>
      </section>
      <div></div>
      <section className="flex flex-col md:ml-32 gap-16">
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold">
            Explore the fascinating world of our best canine friends!
          </h3>
          <p className="ml-12 text-xl">
            Here, you will find information, curiosities, and interesting facts
            about a variety of dog breeds. Get ready to be enchanted by these
            furry companions and discover everything there is to know about
            them.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold">
            Get to know the unique personalities and charms of each breed
          </h3>
          <p className="ml-12 text-xl w-3/4">
            In our 'Breeds' section, dive into the diversity of dogs and explore
            amazing cards with detailed information about each breed. From the
            small and adorable to the big and majestic, we have them all here!
            Swipe through the cards and uncover curiosities about temperament,
            size, physical characteristics, and much more. By clicking on a
            specific card, you will open the doors to a universe of knowledge
            about the chosen breed. Get ready to fall even more in love with
            these lovable four-legged friends!
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold">
            Delight your eyes with magical moments captured in images
          </h3>
          <p className="ml-12 text-xl w-3/4">
            In our "Random Photos" section, we have carefully curated a
            selection of the best dog photos. These images capture charming and
            playful moments of our canine friends in action. From playful
            puppies to adorable poses, these photos will warm your heart and put
            a smile on your face. Enjoy a moment of happiness as you appreciate
            the beauty and expressiveness of these incredible animals.
          </p>
        </div>
        <div className="flex flex-col gap-8 ">
          <h3 className="text-2xl font-bold">
            Discover surprising facts and useful advice
          </h3>
          <p className="ml-12 text-xl w-3/4">
            In addition to presenting breeds and photos, our page is also a
            place where you can find amazing curiosities and helpful tips about
            dogs. Want to know why dogs wag their tails? Or maybe you're seeking
            guidance on training or health care? Here, you will find the answers
            to your most curious questions and the practical information you
            need. Feel free to explore, learn, and have fun on this page
            dedicated to our adorable canine companions. We are constantly
            updating our content to bring you new discoveries and keep you
            entertained. So, grab a cup of tea, get cozy, and dive into this
            world full of joy, tenderness, and lots of fun!
          </p>
        </div>
      </section>
    </>
  );
}
