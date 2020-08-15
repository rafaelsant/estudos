import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/21200327?s=460&u=e5cd36469495f52ca95b2e1da44401eb5662deae&v=4" alt="Rafael Santiago"/>
                        <div>
                            <strong>Rafael Santiago</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>Entusiasta das melhores tecnologias de quimica avançada. <br/>
                    Apaixonado por explodir coisas em laboratório para mudar a vida das pessoas
                    através de experiencias.Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;