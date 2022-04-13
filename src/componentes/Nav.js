import { AiFillLinkedin } from "react-icons/ai";
import './styles.nav.css';
import { AiOutlineUser } from "react-icons/ai";
import {  BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Nav(){
    return(
        <div className='body'> 

            
                <h2 className='titulo'>  Olá, me chamo </h2> 
                <h1 className='subTitulo'> Lucas Cardoso</h1>
                <p className='texto'> Estudante de ciência da computação e buscando meu primeiro <br/>
                emprego como desenvolvedor front-end  </p> 
                    <div className='btns'>
                    <button className='btnUser' >Sobre Mim <AiOutlineUser/> </button>
                    
                    <a href="https://www.linkedin.com/in/lucas-cardoso-barbeiro-a9238619b/" target="_blank">
                    <button className='btnLinke'>Linkedin <AiFillLinkedin/></button>
                    </a>
                   
                    </div>
                
          

             
        </div>
        
        
        
    )
}

export default Nav;