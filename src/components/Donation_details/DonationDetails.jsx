import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedonation } from "../utility/localstorage";

const DonationDetails = () => {
    const donationdetailsdata=useLoaderData()
    console.log(donationdetailsdata)
    const {donationid}=useParams();
    const intdonationid=parseInt(donationid)
    const donationdetails = donationdetailsdata.find(details => details.id===intdonationid);
    // console.log(donationdetails)
    const {image,title,description,price,textColor}=donationdetails
    const notify=()=>{
        savedonation(intdonationid)
        toast('Successfully Donated')
    }
    return (
        <div className="max-w-6xl mx-[70px]  w-[70vw] md:w-full md:mx-auto">
            <div className="flex items-end h-[220px]  md:h-[70vh] bg-contain md:bg-cover bg-no-repeat"style={{backgroundImage: `url(${image})` }}>
                
                <div className="hero-overlay  h-[40%] md:h-[20%] bg-opacity-60 flex items-center">
                    <div className="ml-8">
                     <button onClick={notify} className={`btn border-none text-white`} style={{backgroundColor:textColor}}>Donate {price}</button>
                     <ToastContainer/>
                    </div>
                  
                </div>
                
            </div>

            <div className="my-14 space-y-5">
                <h2 className="text-4xl font-bold">
                    {title}
                </h2>
                <p className="text-base font-normal text-[#0B0B0BB2] text-justify">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default DonationDetails;