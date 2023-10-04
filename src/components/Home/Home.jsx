import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { createContext } from "react";
import { useState } from "react";
export const catcontext=createContext('');
const Home = () => {
  
    const [category,setcategory] =useState('')
    return (
        <div>
            <catcontext.Provider value={ [category,setcategory] }>
            <Banner >

            </Banner>
            <Cards>
                
            </Cards>
            </catcontext.Provider>
            
        </div>
    );
};

export default Home;