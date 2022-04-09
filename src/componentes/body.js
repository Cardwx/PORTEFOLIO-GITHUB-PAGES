import './styles.body.css';
import Imagem from './imagens/checklist_dom.jpg';
import Imagem4 from './imagens/maps.jpg';
import Imagem5 from './imagens/form.jpg';
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BiCode } from "react-icons/bi";
function body(){
    return(
        <div className='sobreMim'>
                <h1 className='tituloSobreMim'>Sobre Mim:</h1>
                    <p className='textoSobreMim'> 
                        Olá, me chamo Lucas Cardoso, sou desenvolvedor Front-end Júnior e estou em busca do meu primeiro emprego como Dev. <br/>
                        Veja abaixo um pouco das minhas qualificações:
                    </p>
        <div className='qualificacao'>

                    {/*Link de referência para o git hub na div*/}

                    <p>Olá mundo</p>
                    <div className='qualificacaoJavaScript'>
                                 <button className='logoJs' > < IoLogoJavascript /> </button> 
                    </div>
                    

                    {/*Link de referência para o git hub na div*/}

                 
                    <div className='qualificacaoReact'>
                            <button className='logoRc'> < DiReact/></button>
                    </div>
                    

                     {/*Link de referência para o git hub na div*/}

               
                    <div className='qualificacaoHtml'>
                            <button className='logoHtml'> < AiFillHtml5/></button> 
                    </div>
                 

                     {/*Link de referência para o git hub na div*/}
                  
                    <div className='qualificacaoCss'>
                            <button className='logoCss'>< FaCss3Alt/> </button> 
                    </div>
                 
                </div>
                        <h1 className='conhecaMais'>Conheça mais sobre os meus projetos:</h1>

                            <div className='projetos'> 

                            <div className='projetoCheck'>
                            <img src = {Imagem} className='imagemCheck'/>
                            <h2 className='tituloImagem'>Checklist DOM</h2>
                            <p className='textoImagem'>Projeto de Checklist utilizando Javascript com manipulação DOM. </p>
                                <div className='btnsPro'> 
                                    {/** Adicionando os links ao botoões */}
                                    <a href='https://github.com/Cardwx/gitHub-pages' target="_blank">
                                    <button className='repositorioGitCheck'><p> <AiFillGithub/></p></button>
                                    </a>
                                    {/** Adicionando os links ao botoões */}
                                    <a href='https://cardwx.github.io/gitHub-pages/index.html' target="_blank"> 
                                    <button className='viewLive'><p> <BiCode/></p></button>
                                    </a>
                                </div>
                            </div>

                            <div className='projetoCep'>
                                <img src = {Imagem4} className='imagemCep'/>
                                <h2 className='tituloImagem'>Buscador de CEP</h2>
                                <p className='textoImagem'>Primeiro projeto utilizando ReactJs, sendo feito um buscador de CEP. </p>
                                
                                <div className='btnsPro'> 
                                    {/** Adicionando os links ao botoões */}
                                    <a href='https://github.com/Cardwx/gitHubPagesBuscaCep' target="_blank">
                                    <button className='repositorioGitCheck'><p> <AiFillGithub/></p></button>
                                    </a>
                                    {/** Adicionando os links ao botoões */}
                                    <a href=' https://cardwx.github.io/gitHubPagesBuscaCep/' target="_blank"> 
                                    <button className='viewLive'><p> <BiCode/></p></button>
                                    </a>
                                </div>
                            </div>

                            <div className='projetoForm'> 
                                <img src = {Imagem5} className='imagemForm'/>
                                <h2 className='tituloImagem'>Formulário JS</h2>
                                <p className='textoImagem'>Projeto de formulário responsivo utilizando JS, HTML e CSS.</p>
                                
                                <div className='btnsPro'> 
                                    <a href=' ' target="_blank"> 
                                        <button className='repositorioGitCheck'><p> <AiFillGithub/></p></button>
                                    </a>
                                    
                                    <a href='https://cardwx.github.io/FormGitHubPages/index.html' target="_blank"> 
                                        <button className='viewLive'><p> <BiCode/></p></button>
                                    </a>
                                </div>
                            
                            </div>

                            </div>
                            
        </div>
        
    )
}

export default body;