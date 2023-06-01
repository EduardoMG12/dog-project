"use client"
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SvgContainer from "@/components/SVGs/SvgContainer";
import DogLogo from "@/components/SVGs/DogLogo";
import {config} from "dotenv"

config()
export default function Home() {
  return (
    <>
      <header className="w-full h-11 flex items-center">
        <div className="w-full px-32 flex flex-row items-center justify-between">
          <div className="flex justify-center items-center">
            <DogLogo fillLogo={"white"} />
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
      <section className="h-screen flex justify-between">
        <div className="w-1/2 pl-32">
          <h1 className="text-8xl mt-32" style={{ letterSpacing: "0.285em" }}>
            NAMELOGO
          </h1>
          <h2 className="text-2xl mt-16" style={{ letterSpacing: "0.215em" }}>
            conhecendo mais sobre seu fiel companheiro
          </h2>
          <div className="mt-11 w-full relative h-96">
           <SvgContainer/>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          {/* <div className="mt-4 h-3/4 w-full" style={{borderRadius:"1600px 1000px 800px 1800px / 1600px 100px 550px 650px", backgroundImage: "url(https://unsplash.com/photos/2l0CWTpcChI)"}}></div> */}
          <Image className="mt-4 h-full w-full" alt="dog image" width={1000} height={1000} style={{borderRadius:"1600px 1000px 800px 1800px / 1600px 100px 550px 650px"}} src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"/>
        </div>
      </section>
        <div></div>
      <section>
        <h3></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          consectetur doloremque magni provident veniam praesentium iure, nihil
          perspiciatis eos minima dolor animi excepturi autem accusantium, error
          laborum esse, id quas.
        </p>
        <h3></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          consectetur doloremque magni provident veniam praesentium iure, nihil
          perspiciatis eos minima dolor animi excepturi autem accusantium, error
          laborum esse, id quas.
        </p>
        <h3></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          consectetur doloremque magni provident veniam praesentium iure, nihil
          perspiciatis eos minima dolor animi excepturi autem accusantium, error
          laborum esse, id quas.
        </p>
        <h3></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          consectetur doloremque magni provident veniam praesentium iure, nihil
          perspiciatis eos minima dolor animi excepturi autem accusantium, error
          laborum esse, id quas.
        </p>
      </section>
    </>
  );
}
