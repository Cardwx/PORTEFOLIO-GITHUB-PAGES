import { AiFillLinkedin } from "react-icons/ai";
import './styles.nav.css';
import { AiOutlineUser } from "react-icons/ai";
import {   Link  } from 'react-scroll';

function Nav(){
    return(
        <div className='body'> 

            
                <h2 className='titulo'>  Olá, me chamo </h2> 
                <h1 className='subTitulo'> Lucas Cardoso</h1>
                <p className='texto'> Estudante de ciência da computação e buscando meu primeiro <br/>
                emprego como desenvolvedor front-end, atualmente com 21 anos.</p> 
                    <div className='btns'>
                    
                    <button className='btnUser' >
                        {/*Adicionando a inimação do sobre mim para realizar o direcionamento da página para o sobre mim*/ }
                    <Link
                     activeClass="active"
                     to="sobreMim"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={1700}
                        >
                        Sobre Mim  <AiOutlineUser/> </Link> </button>
                        
                    
                    <a href="https://www.linkedin.com/in/lucas-cardoso-barbeiro-a9238619b/" target="_blank">
                    <button className='btnLinke'>Linkedin <AiFillLinkedin/></button>
                    </a>
                   
                    </div>
                
          

             
        </div>
        
        
        
    )
}

export default Nav;