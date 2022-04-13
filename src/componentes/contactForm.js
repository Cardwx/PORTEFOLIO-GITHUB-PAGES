import emailjs from "emailjs-com";
import React from 'react';
import './styles.contact.css';
export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_726l5rm', e.target, 'KEXfDK7orjjMNk5Mz')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert('Mensagem nao pode ser enviada!')
            
        });
        e.target.reset()

 
    }
    return(
        <div className="contato">
            <div className="container">
            
            <form onSubmit={sendEmail} className='formInput'>
                    <div className="formEmail">
                    <h2 className="tituloForm">Contato:</h2>
                        <div className="textoEmail">
                            <label>Nome:</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Nome" name="name"/>
                        </div>
                        <div className="textoEmail">
                        <label>Email:</label>
                            <input type="email" className="form-control" required placeholder="Seu email" name="email"/>
                        </div>

                        <div className="textoEmail">
                        <label>Mensagem:</label>
                            <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div className="btn">
                            <input type="submit" className="btn-info" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
                      
            </div>

        </div>
    )
}