import { useContext, useEffect, useState } from "react";
import Card from "./card";
import { catcontext } from "../Home/Home";

const Cards = () => {
    const [allcard,setallcard]=useState([])
    const [displaycard,setdisplaycard]=useState([])
    const category=useContext(catcontext)

    useEffect(() =>{
        fetch('/donationdata.json')
        .then(res=>res.json())
        .then(data=>{
            setallcard(data)
            setdisplaycard(data)
            
        })
       
        
    },[])
    
    return (
        <main className="max-w-6xl mx-auto my-20 ">
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