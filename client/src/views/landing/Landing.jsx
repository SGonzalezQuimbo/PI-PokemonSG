import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Landing() {
    return (
      <div className="Landing">
        <h1>Esta es la LANDING</h1>
        <Link to="/home"><button type="submit">Ingresar</button></Link>
        
      </div>
    );
  }
  
  export default Landing;