import germinar from "./germinar.png";
import { Link } from "react-router-dom";
function Logo(props){
    
    return (
    < Link to={ <img src={germinar} alt="E" width="80px"/>}>
       
     </Link>
    );
}

export default Logo;
