import { Link} from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const Card = ({card}) => {
    // const navigate = useNavigate();
    // const go=()=>{
    //     navigate(`/donationdetails/${id}`)
    // }
    const {id,image,title,category,cardBackgroundColor,categoryBackgroundColor,textColor}=card
    return (
       
    
              <Link to={`/donationdetails/${id}`}>
            <div  className={`card card-compact w-[280px]`} style={{backgroundColor:cardBackgroundColor}}>
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                    <p className={` w-max py-1 px-2 text-[white] rounded-lg text-sm font-semibold`} style={{backgroundColor:categoryBackgroundColor, color :textColor}}>{category}</p>
                        <h2 className={`card-title text-xl ` } style={{color :textColor}}>{title}</h2>
                       
                    </div>
            </div>
            </Link>
            
        
    );
};
Card.propTypes = {
    card:PropTypes.object,
};
export default Card;