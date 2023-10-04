import { useContext } from "react";
import ban from "../../assets/Resources/banner.jpg"
// import { catcontext } from "../Home/Home";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    // const [category,setcategory]=useContext(catcontext)
    const handlesubmit = e =>{
        e.preventDefault();
        // console.log(e.target.category.value);
       const category=e.target.category.value
        // console.log('jj',category)
        navigate(`/categoricaldata/${category}`);
        
    }
    return (
        <div >
            <div className="hero h-[80vh]" style={{backgroundImage: `url(${ban})`}}>
                <div className="hero-overlay bg-opacity-80 bg-white"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-full">
                            <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                            
                            <div >
                                <form onSubmit={handlesubmit}>
                                    <label className="input-group justify-center">
                                        <input type="text" placeholder="Search here...." name="category" className="input text-black" />
                                        <button className="btn bg-[#FF444A] border-none
                                        text-white">Search</button>
                                    </label>
                                </form> 
                            
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;