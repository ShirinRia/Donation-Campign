import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Cards/card";
import { useContext } from "react";
import { catcontext } from "../Home/Home";


const Categoricaldata = () => {
    const fulldata=useLoaderData()
    const {category}=useParams();
    console.log(category)
    const filtereddata=fulldata.filter(searcheddata =>  searcheddata.category.toLowerCase() === category.toLowerCase() )
    console.log(filtereddata)
    return (
        <div>
            <Banner>

            </Banner>
            <div className="max-w-6xl mx-auto my-20 ">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20">
               
               {
                   filtereddata.map(card =><Card
                   key={card.id}
                   card={card}></Card>)
               }
           </div>
            </div>

            
        </div>
    );
};

export default Categoricaldata;