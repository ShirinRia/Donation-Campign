

const Card = ({card}) => {
    const {id,image,title,category,description,price,cardBackgroundColor,categoryBackgroundColor,textColor}=card
    return (
       
           <div className={`card card-compact w-[280px] bg-[${cardBackgroundColor}]`}>
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                    <p className={`bg-[${categoryBackgroundColor}] w-max py-1 px-2 text-[white] rounded-lg text-sm text-[${textColor}] font-semibold`}>{category}</p>
                        <h2 className={`card-title text-xl text-[${textColor}]`}>{title}</h2>
                       
                        
                    </div>
            </div>
        
    );
};

export default Card;