import React,{useState,useEffect} from 'react'
import EventBanner from '/images/eventbanner1.png'
import axios from 'axios';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import LoadingPageLayout from './LoadingPageLayout';
const EventLayout = () => {
    const [scrolled, setScrolled] = useState(false);

      const [fetchedData,setFetchedData] = useState({
        data:null,
        total_pages:1,
    })
    const [status,setStatus] = useState('')

    const navigate = useNavigate();

    const defaultNoBanner = "https://img.freepik.com/premium-photo/euro-2024-spain-england-flags-collage_23-2151698246.jpg?w=1380"


    //   const fetchEventData =async(id)=>{
    //     try{
    //         const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events/`)
    //         setFetchedData({
    //             data:response.data,
    //             total_pages:1,
    //         })
    //         console.log('event response',response)
    //     }catch(error){
    //         console.log(error)
            
    //     }

    // }

    // useEffect(()=>{
    //         fetchEventData()
        
    // },[])

    const formatDatetime =(date)=>{
      const newDate = new Date()
      // return newDate || date
      // return newDate
      return newDate.toDateString()
    }

    const apiData = {
      url:`${import.meta.env.VITE_API_URL}/api/events/`,
      search:'',
      headers:{},
      query:{
        status:''
      }
    }
    const [reload,setReload] = useState(false);
    
    const handleReload = ()=>{
      setReload(!reload);
    }
    const searchParams = new URLSearchParams(window.location.search)
    const type = searchParams.get('type')
  return (
    <>
    <LoadingPageLayout apiUrl={apiData?.url} reload={reload} isResponseArray={true} setFetchedData={setFetchedData} fetchedData={fetchedData}>
    <div className="event_nav">
      <ul>
        <Link to={`?type=1`} onClick={handleReload}><li className={type == 1 && 'active'}>Ongoing</li></Link>
        <Link to={`/events`} onClick={handleReload}><li className={!type && 'active'}> Open</li></Link>
        <Link to={`?type=2`} onClick={handleReload}><li className={type ==2 && 'active'}>Over</li></Link>
      </ul>
    </div>
    <main className="events gb_container">
        <h2 className="events__title">Events ({fetchedData?.data?.length || 0})</h2>
        <div className="events__grid">
          {fetchedData.data && fetchedData.data.map((event, index) => (
            <Link to={`/event/${event.slug_field || event.id}/`} key={index} className="events__card">
              <div className="events__card-image">
                <img src={event?.banner || defaultNoBanner} alt={event?.title} />
              </div>
              <div className="detail_box">
              <h3 className="events__card-title">{event?.title}</h3>
              <p className="events__card-date">{event?.date}</p>
              <p className="events__card-detail">Entry Fee : {event?.entry_fee}</p>
              <p className="events__card-detail">Registration {formatDatetime(event?.registration_start_date)} - {formatDatetime(event?.registration_end_date)}</p>
              <p className="events__card-detail">Starts from - {formatDatetime(event?.event_start_date)}</p>
              </div>
              <div className="events__card-buttons">
                {/* <button className="details" onClick={()=>navigate(`/event/${event?.id}`)}>Event Detail</button> */}
                {/* <button className="global_btn">View More</button> */}
                {/* <button className="scores">Scores</button> */}
                {/* <p>Click to View</p> */}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </LoadingPageLayout>
      </>
  )
}

export default EventLayout