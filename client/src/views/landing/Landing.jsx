import { Link } from "react-router-dom/cjs/react-router-dom.min";
import fondo_project from "../../assets/images/fondo_project.jpg";
import './landing.styles.css';

function Landing() {
    return (
      <>
      <img className="image-bck" src={fondo_project} alt="fondo"></img>
      <div className="landing">
        {/* <h1>Esta es la LANDING</h1> */}
        <Link to="/home"><button className="bt-land" type="submit">START</button></Link>
        
      </div>
      </>
    );
  }
  
  export default Landing;