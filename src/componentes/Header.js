import './styles.header.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
function Header(){
    return(
            <div className='cabecalho'>
                <a href='https://api.whatsapp.com/send?phone=5519993712098' target="_blank"> 
                <h1 className='wppIcon'><AiOutlineWhatsApp/></h1>
                </a>
                <a href='https://github.com/Cardwx' target="_blank"> 
                <h1 className='linkIcon'><AiFillGithub/></h1>
                </a>
                <a href='https://www.linkedin.com/in/lucas-cardoso-barbeiro-a9238619b/' target="_blank"> 
                <h1 className='gitIcon'><AiFillLinkedin/></h1>
                </a>
            </div>
        
    )
}

export default Header;
