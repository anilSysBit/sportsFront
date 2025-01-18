import React, { useState } from 'react'
import LoadingPageLayout from '../../layouts/LoadingPageLayout'
import NewsCard from '../news/NewsCard';


interface fetchType{
    data:any | null,
    pagination:number,
}
const SponserPage:React.FC = () => {
    const [fetchedData,setFetchedData] = useState<fetchType>({
        data:null,
        pagination:1,
    });
    let url:string = `${import.meta.env.VITE_API_URL}/api/sponsers/`
  return (
    <LoadingPageLayout apiUrl={url} isResponseArray setFetchedData={setFetchedData}>
        <h2>Sponsers</h2>
        <div className="news_list sponsers_page">
            {fetchedData.data && fetchedData.data.map((elem,index)=>{
                return(
                    <NewsCard 
                        header={elem?.name} 
                        image={elem?.logo} 
                        description={elem?.small_description}/>
                )
            })}
        </div>
    </LoadingPageLayout>
  )
}

export default SponserPage