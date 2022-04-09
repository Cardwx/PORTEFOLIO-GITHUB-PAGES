import { AiFillLinkedin } from "react-icons/ai";
import './styles.nav.css';
import { AiOutlineUser } from "react-icons/ai";

function Nav(){
    return(
        <div className='body'> 

            <div className='textos'> 
                <h2 className='titulo'>  Olá, me chamo </h2> 
                <h1 className='subTitulo'> Lucas Cardoso</h1>
                <p className='texto'> Estudante de ciência da computação e buscando meu primeiro <br/>
                emprego como desenvolvedor front-end  </p> 
                    <div className='btns'>
                    <button className='btnUser'>Sobre Mim <AiOutlineUser/></button>
                    <button className='btnLinke'>Linkedin <AiFillLinkedin/></button>
                    </div>
                
            </div>

             
        </div>
        
        
        
    )
}

export default Nav;