import { useEffect, useState } from "react";
import Card from "./card";

const Cards = () => {
   
    const [displaycard,setdisplaycard]=useState([])

    useEffect(() =>{
        fetch('/donationdata.json')
        .then(res=>res.json())
        .then(data=>{
          
            setdisplaycard(data)
            
        })
       
        
    },[])
    
    return (
        <main className="max-w-6xl mx-[80px] md:mx-auto my-20 ">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20">
               
                {
                    displaycard.map(card =><Card
                    key={card.id}
                    card={card}></Card>)
                }
            </div>
        </main>
        
    );
};

export default Cards;