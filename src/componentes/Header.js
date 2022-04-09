import './styles.header.css';
import { SiReact } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
{/*teste* */}
function Header(){
    return(
            <div className='cabecalho'>
                
                <button className='iconReact'> <SiReact className=''/> </button>
                <button className='iconHtml'> <AiFillHtml5/> </button>
                <button className='iconCss'> <DiCss3/> </button>
                <button className='iconJs'> <DiJavascript1/> </button>

            </div>
        
    )
}

export default Header;
