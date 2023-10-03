import ban from "../../assets/Resources/banner.jpg"

const Banner = () => {
   
    return (
        <div >
            <div className="hero h-[80vh]" style={{backgroundImage: `url(${ban})`}}>
                <div className="hero-overlay bg-opacity-80 bg-white"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-full">
                            <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                            
                            <div >
                                    
                                    <label className="input-group justify-center">
                                        <input type="text" placeholder="Search here...." className="input " />
                                        <button className="btn bg-[#FF444A] border-none
                                        text-white">Search</button>
                                    </label>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;