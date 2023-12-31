
import PropTypes from 'prop-types'; // ES6

const DonationCards = ({donateddata}) => {
   
    const {image,title,category,price,cardBackgroundColor,categoryBackgroundColor,textColor}=donateddata
    return (
        <div className="card card-side bg-base-100" style={{backgroundColor:cardBackgroundColor}}>
                <figure><img className="w-[150px] md:w-[220px] h-full" src={image} alt="Movie"/></figure>
                    <div className="card-body w-max">
                    <p className={` w-max py-1 px-2 text-[white] rounded-lg text-sm font-semibold`} style={{backgroundColor:categoryBackgroundColor, color :textColor}}>{category}</p>
                        <h2 className="card-title text-2xl font-semibold">{title}</h2>
                        <p className="text-base font-semibold" style={{color :textColor}}>{price}</p>
                        <div className="card-actions " >
                        <button className="btn text-white border-none" style={{backgroundColor :textColor}}>View Details</button>
                    </div>
                </div>
        </div>
    );
};
DonationCards.propTypes = {
    donateddata:PropTypes.object,
};
export default DonationCards;