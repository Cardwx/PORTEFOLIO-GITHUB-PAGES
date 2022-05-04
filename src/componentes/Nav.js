import { AiFillEye } from "react-icons/ai";
import './styles.nav.css';
import { AiOutlineUser } from "react-icons/ai";
import { Link, Link2 } from 'react-scroll';
import Imagem6 from './imagens/Ellipse 1.png'; 
import Lucas from './imagens/lucas1.png';

function Nav() {
    return (
        <div className='body'>

            <div className="informacoes"> 
            <h2 className='titulo'>  Olá, me chamo </h2>
            <h1 className='subTitulo'> Lucas Cardoso</h1>
            <p className='texto'> Estudante de ciência da computação e buscando meu primeiro <br />
                emprego como desenvolvedor front-end, atualmente com 21 anos.</p>
            <div className='btns'>

                <button className='btnUser' >
                    {/*Adicionando a ainimação do sobre mim para realizar o direcionamento da página para o sobre mim*/}
                    <Link activeClass="active" to="sobreMim" spy={true} smooth={true}offset={-70} duration={1700}>
                        Sobre Mim  <AiOutlineUser /> </Link> </button>
                    
                    <button className='btnLinke'>
                         {/*Adicionando a ainimação do projetos para realizar o direcionamento da página para os projetos*/}
                    <Link activeClass="active" to="projetos" spy={true} smooth={true}offset={-70} duration={1700}>
                        Projetos  <AiFillEye /> </Link> </button>
               
                </div>
                
            </div>
            <div className="minhaFoto">
            <img src={Imagem6} className='imagem-svg'/>
            <img src={Lucas} className='imagemLucas'/>  
            </div>




        </div>



    )
}

export default Nav;