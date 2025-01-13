import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NoData from '../components/global/NoData';

interface LoadingPageLayoutProps{
  children:React.ReactNode;
  auth:boolean;
  title?:string;
  isLoading?:boolean;
  fetchedData:any;
  setFetchedData: React.Dispatch<React.SetStateAction<any>>;
  apiUrl:string;
  isResponseArray:boolean;
  isResponseObject:boolean;
}
interface Error {
  header: string;
  message?: string;
}

const LoadingPageLayout: React.FC<LoadingPageLayoutProps> = ({ children, title,apiUrl,fetchedData,setFetchedData,auth=false,isResponseArray=false,isResponseObject=false}) => {
  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState<Error>({
    header:'',
    message:''
  });

  function isObject(value:any) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  const fetchFunction =async()=>{
    setLoading(true);
    const headers = {};
    if(auth){
      const access_token = localStorage.getItem('access_token')
      headers['Authorization'] = `Bearer ${access_token}`
    }
    try{
      const response = await axios.get(apiUrl,headers);
      console.log('Response',response)

      if(response.data){
        if(isResponseArray){
          if(Array.isArray(response.data)){
            setFetchedData(prev =>({
              ...prev,
              data:response.data
            }))
          }
        }else if(isResponseObject){
          if(isObject(response.data)){
            setFetchedData(prev =>({
              ...prev,
              data:response.data
            }))
          }
        }else{
          setError({
            header:"Internal Server Error",
            message:"Try Refresh Page or Contact the Service Provider"
          })
        }
      }

      setLoading(false);
    }catch(error){
      console.log(error)
      setLoading(false);
      if(error.code == "ERR_NETWORK"){
        setError({
          header:"Network Error",
          message:'Try Refreshing the Page or Connect to the network'
        })
      }else if(error.response.status == 500){
        setError({
          header:'Internal Server Error',
          message:"Try Refresh Page or Contact the Service Provider"
          
        })
      }
    }


    
  }

  return(
    <>
      {loading && <div>Loading</div>}
      {/* {error.header && <NoData header={}/>} */}
      {children}
    </>
  )
}
export default LoadingPageLayout