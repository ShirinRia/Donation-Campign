import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getdonation } from "../utility/localstorage";
import DonationCards from "./DonationCards";

const Donation = () => {
    const [donated,setdonated]=useState([])
    const [length,setlength]=useState(4)
    const alldata=useLoaderData()
   
    
   useEffect(()=>{
        const storeddonations=getdonation()
        if(alldata.length){
            const donateddatas=alldata.filter((donation)=>storeddonations.includes(donation.id))
            // console.log(jobdata,storedjobs,jobsapp)
            setdonated(donateddatas)
        }
        
    },[])

    const btnhidden = donated.length<=4 ? " hidden" : "visible";
    const btnhidden2 = length===donated.length ? " hidden" : "visible";
    return (
        <div>
            <div className="grid lg:grid-cols-2 max-w-6xl ml-[25px] mr-[25px] lg:mx-auto my-14 gap-6">
            {
                donated.slice(0,length).map((donateddata)=>
                     <DonationCards key={donateddata.id}
                    donateddata={donateddata}
                    ></DonationCards>
                
               )
            }
           
        </div>
        <div className={`${btnhidden} ${btnhidden2} text-center`}>
                <button onClick={()=>setlength(donated.length)} className="btn bg-[#009444] text-white">See All</button>
                </div>
        </div>
        
    );
};

export default Donation;