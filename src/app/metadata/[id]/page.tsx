import type { Metadata } from "next";
import { Inter } from "next/font/google";

// export const metadata: Metadata = {
//   title: "Own title",
//   description: "Generated by create next app",
// };

export const generateMetadata=():Metadata=>{
  return {title:"hello"};
}

type Props={
  params:{
    id:string
  }
}

export default function Page({params}:Props) {
      return <h1>Meta data page{params.id}</h1>
    }