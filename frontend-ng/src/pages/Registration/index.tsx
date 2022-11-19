import NavContainer from "../../components/NavContainer/Navcontainer";
import './style.css';

const Registration = () => {
    return (
      <>
        <NavContainer />
       <div className="regis-container">
            <div className="regis">
                <h2>Registration Login</h2>
            </div>

            <div className="regis-input">
                <label htmlFor="">Name:</label>
                <input type="text" />
                <label htmlFor="password">Password:</label>
                <input type="password" />
                <label htmlFor="email">Email:</label>
                <input type="text" name="id" id="id" />
            </div>

            <button>Registration</button>
       </div>
       
     </>
    );
  }
  
  export default Registration;