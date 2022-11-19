import './style.css';
import logo from '../../img/logo.png';


const Login = () => {
    return (
    
    <div className='login-container'>
        <div className='logo'>
            <img src={logo} alt="Logo" />
            <h2>Task System</h2>
        </div>

        <div className='login'>
            <label htmlFor="">Login:</label>
            <input type="text" />
            <label htmlFor="Passoword">Passoword:</label>
            <input type="password" minLength={4}  required/>
        
            
        </div>

        <button className='button-login' type='submit'>Login</button>
        
        <div className='cadastro'>
            <a href="/Registration">Registration</a>
        </div>
    </div>
    );
  }
  
  export default Login;