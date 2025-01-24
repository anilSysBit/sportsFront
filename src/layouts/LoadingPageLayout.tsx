import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NoData from '../components/global/NoData';
import Loader from '../components/global/Loader';
import { useSearchParams } from 'react-router-dom';

interface LoadingPageLayoutProps{
  children?:React.ReactNode;
  auth?:boolean;
  title?:string;
  isLoading?:boolean;
  fetchedData?:any;
  setFetchedData: React.Dispatch<React.SetStateAction<any>>;
  apiUrl:string;
  isResponseArray?:boolean;
  isResponseObject?:boolean;
  query?:object;
  loaderStatus?:boolean;
  showEmptyArrayStatus?:boolean;
  reload?:boolean;
}

interface Error {
  header: string;
  message?: string;
}

const LoadingPageLayout: React.FC<LoadingPageLayoutProps> = ({ children, title,apiUrl,fetchedData,setFetchedData,auth=false,isResponseArray=false,isResponseObject=false,query,loaderStatus=true,showEmptyArrayStatus=true,reload}) => {
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
    const queryParams = new URLSearchParams(window.location.search)
    const queryObject = Object.fromEntries(queryParams.entries());
    const headers = {};
    if(auth){
      const access_token = localStorage.getItem('access_token')
      headers['Authorization'] = `Bearer ${access_token}`
    }
    try{
      const response = await axios.get(apiUrl,{
        params:queryObject,
        headers:headers
      });
      console.log('Response',response)

      if(response.data){
        if(isResponseArray){
          if(Array.isArray(response.data)){
            setFetchedData(prev =>({
              ...prev,
              data:response.data
            }))

            if (showEmptyArrayStatus && response.data.length < 1){
              setError({
                header:"No Data Found",
                message:'Data is empty'
              })
            }
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


  useEffect(()=>{
    fetchFunction();
  },[reload])

  

  return(
    <main className='loading_page'>
      {(loaderStatus && loading) && <Loader/>}
      {children}
      {error.header && <NoData title={error.header} message={error.message}/>}
    </main>
  )
}
export default LoadingPageLayout