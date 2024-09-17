import { notFound } from "next/navigation"
export default function Page({params}:{
    params:{postId:string,commentId:string}
  }) {
    if(parseInt(params.postId)>100){
        notFound();
    }
      return <h1>post id {params.postId  } comments id{params.commentId}</h1>
    }