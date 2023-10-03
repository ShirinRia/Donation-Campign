import { useEffect, useState } from "react";
import Card from "./card";


const Cards = () => {
    const [allcard,setallcard]=useState([])
    useEffect(() =>{
        fetch('donationdata.json')
        .then(res=>res.json())
        .then(data=>setallcard(data))
    },[])
    return (
        <main className="max-w-6xl mx-auto my-20 ">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20">
                {
                    allcard.map(card =><Card
                    key={card.id}
                    card={card}></Card>)
                }
            </div>
        </main>
        
    );
};

export default Cards;