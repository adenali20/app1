export default function Page({params}:{
    params:{
        slug :string[];
    }
  }) {
    if(params.slug.length==2){
        return <h1>viewing {params.slug[0]} and {params.slug[1]}</h1>
    }else if(params.slug.length==1){
        return <h1>viewing {params.slug[0]} Only</h1>
    }
      return <h1>docs page</h1>
    }