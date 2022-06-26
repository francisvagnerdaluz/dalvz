import './formulario.css'
function Formulario(){
    return(
        <section className="section-formulario animate__animated animate__fadeInDown">
            <img className="logo" src="./uGet-logo.svg" alt=""/>
            <header className="topo recipiente">
                <h2 className="crie-conta--texto">Crie sua conta</h2>
                <p className="texto-processo-criacao cor-texto--formulario">O processo de criação será feito em três etapas.</p>
            </header>
            <div className="form-login">
                <form>
                    <div className="flex coluna">
                        <input type="text" placeholder="CPF *" autoFocus/>
                        <input type="text" placeholder="Nome completo *"/>
                        <input type="text" placeholder="Data de nascimento *"/>
                        <input type="text" placeholder="Nome a mãe *"/>
                        <input type="email" placeholder="E-mail *"/>
                        <input type="email" placeholder="Telefone *"/>
                    </div>
                    <div className="btn-registrar">
                        <button>Seguinte</button>
                    </div>
                </form>
            </div>

            <div className="form-retrato recipiente">
                <form >
                    <div className="flex coluna">
                        <input type="text" placeholder="CPF *" autoFocus/>
                        <input type="text" placeholder="Nome completo *"/>
                        <input type="text" placeholder="Data de nascimento *"/>
                        <input type="text" placeholder="Nome a mãe *"/>
                        <input type="email" placeholder="E-mail *"/>
                        <input type="email" placeholder="Telefone *"/>
                        <button>Registrar</button>
                    </div>
                </form>
            </div>
            <footer className="footer-formulario">
                <p>Ao se registrar, eu concordo com os <a href="dalvz/dalvz/src/componentes/autenticacao/formulario#">Termos de Serviço</a>  e  <a href="dalvz/dalvz/src/componentes/autenticacao/formulario#">Política de Privacidade</a> mínimos.</p>
            </footer>
        </section>
    )
}
export default Formulario