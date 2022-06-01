import './styles.body.css';
import Imagem from './imagens/checklist_dom.jpg';import Imagem4 from './imagens/maps.jpg';import { IoLogoJavascript } from "react-icons/io";import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BiCode } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import {SiGithubactions} from "react-icons/si";
import {CgWebsite} from "react-icons/cg";
import {DiSass, DiVisualstudio} from "react-icons/di";
import {BsFillBootstrapFill} from "react-icons/bs"
import {FiFigma} from "react-icons/fi"
import {SiTrello} from "react-icons/si";
function body() {
    return (
        <div className='sobreMim'>
            <h1 className='tituloSobreMim'>Sobre Mim:</h1>
            <p className='textoSobreMim'>
                Olá, me chamo Lucas Cardoso Barbeiro, sou desenvolvedor Front-end e estou em busca do meu primeiro emprego como Dev.
                Veja abaixo um pouco das minhas proficiências e ferramentas no qual trabalhei:
            </p>

            {/*informações a respeito das proficiências*/}
            <h1 className='tituloLinguagens'>Linguagens:</h1>
            <div className='qualificacao'>

                {/*DIV LINGUAGENS DE PROGRAMAÇÃO*/}
                
               <div className='qualiPurple'>
               <h1 className='iconJs'><IoLogoJavascript/></h1>
               </div>
               <div className='quali'>
               <h1 className='iconJs'><FaCss3Alt/></h1>
               </div>
               <div className='quali'>
               <h1 className='iconJs'><AiFillHtml5/></h1>
               </div>
               <div className='quali'>
               <h1 className='iconJs'><DiReact/></h1>
               </div>
               <div className='qualiPurple'>
               <h1 className='iconJs'><DiSass/></h1>
               </div>
            </div>
            <h1 className='tituloLinguagens'>Entre outros:</h1>
            <div className='qualificacao'>


                {/*DIV ENTRE OUTROS*/}
                
               <div className='quali'>
               <h1 className='iconJs'><DiVisualstudio/></h1>
               </div>
               <div className='quali'>
               <h1 className='iconJs'><BsFillBootstrapFill/></h1>
               </div>
               <div className='qualiPurple'>
               <h1 className='iconJs'><FiFigma/></h1>
               </div>
               <div className='quali'>
               <h1 className='iconJs'><SiTrello/></h1>
               </div>
               <div className='qualiPurple'>
               <h1 className='iconJs'><DiSass/></h1>
               </div>
            </div>
                <div className='services'>
                <h1 className='conhecaMais'>Veja os serviços que eu ofereço:</h1>

                {/*DIV criada para alinhar o flex box dos itens filhos*/}

                <div className='servicesOffer'>
                <div className='uiDiv'>
                    {/*UI icon*/}
                   <p className='iconUi'><MdDesignServices/></p>
                    {/*Texto do UI*/}
                    <h1 className='titleUi'> UI Design</h1>
                    <p className='textoUi'>
                    Desenvolvimento de Sites utilizando Figma como base para o layout
            </p>
                
                </div>
                <div className='gitDiv'>
                    <p className='iconGit'><SiGithubactions/></p>
                <h1 className='titleGit'> Git Hub</h1>
                    <p className='textoGit'>
                    Versionamento de códigos utilizando GitHub e GitHub desktop
            </p>
                
                </div>

                <div className='devDiv'>
                    <p className='iconWeb'><CgWebsite/></p>
                    <h1 className='titleWeb'> Web</h1>
                    <p className='textoDiv'>
                Desenvolvimento de sites utilizando JavaScript, HTML, CSS (SASS, GRID, FLEX-BOX E MEDIA QUERY) e experiência em alguns frameworks como: Reactjs, Bulma css
            </p>
                
                </div>
                </div>
                </div>
            <h1 className='conhecaMais'>Conheça mais sobre os meus projetos:</h1>
            <div className='projetos'>

                <div className='projetoCheck'>
                    <img src={Imagem} className='imagemCheck' />
                    <h2 className='tituloImagem'>Checklist </h2>
                    <p className='textoImagem'>Projeto de Checklist utilizando Javascript com manipulação DOM. </p>
                    <div className='btnsPro'>
                        {/** Adicionando os links ao botoões */}
                        <a href='https://github.com/Cardwx/gitHub-pages' target="_blank">
                            <button className='repositorioGitCheck'><p> <AiFillGithub /></p></button>
                        </a>
                        {/** Adicionando os links ao botoões */}
                        <a href='https://cardwx.github.io/gitHub-pages/index.html' target="_blank">
                            <button className='viewLive'><p> <BiCode /></p></button>
                        </a>
                    </div>
                </div>

                <div className='projetoCep'>
                    <img src={Imagem4} className='imagemCep' />
                    <h2 className='tituloImagem'>Buscador  CEP</h2>
                    <p className='textoImagem'>Primeiro projeto utilizando ReactJs, sendo feito um buscador de CEP. </p>

                    <div className='btnsPro'>
                        {/** Adicionando os links ao botoões */}
                        <a href='https://github.com/Cardwx/gitHubPagesBuscaCep' target="_blank">
                            <button className='repositorioGitCheck'><p> <AiFillGithub /></p></button>
                        </a>
                        {/** Adicionando os links ao botoões */}
                        <a href=' https://cardwx.github.io/gitHubPagesBuscaCep/' target="_blank">
                            <button className='viewLive'><p> <BiCode /></p></button>
                        </a>
                    </div>
                </div>
                

            </div>

        </div>

    )
}

export default body;
