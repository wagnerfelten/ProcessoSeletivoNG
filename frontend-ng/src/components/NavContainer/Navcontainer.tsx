import Logoff from "../Logoff/logoff";
import './Style.css';

function NavContainer() {
    return (
     <>
        <main className="nav-container">
            <div className="nav-logo">
                <h1><span>Ng</span> Tech</h1>
            </div>
           
            <div className="logoff">
                <Logoff />
            </div>
        </main>

     </>
    );
  }
  
  export default NavContainer;